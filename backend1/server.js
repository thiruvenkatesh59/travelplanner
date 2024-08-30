const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/booking-travel', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define the user schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Define the booking schema and model
const bookingSchema = new mongoose.Schema({
  emailId: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  travelers: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  canceled: { type: Boolean, default: false },
  canceledAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// User registration endpoint
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      res.status(500).json({ message: 'Error registering user' });
    }
  }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Booking creation endpoint
app.post('/api/bookings', async (req, res) => {
  const { emailId, destination, startDate, endDate, travelers, totalAmount } = req.body;
  try {
    // Check if emailId is registered
    const user = await User.findOne({ email: emailId });
    if (!user) {
      return res.status(400).json({ message: 'Invalid emailId. Please register first.' });
    }

    const newBooking = new Booking({ emailId, destination, startDate, endDate, travelers, totalAmount });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking' });
  }
});

// Booking cancellation endpoint
app.patch('/api/bookings/:id/cancel', async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { canceled: true, canceledAt: new Date() },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking canceled successfully', booking: updatedBooking });
  } catch (error) {
    console.error('Error canceling booking:', error);
    res.status(500).json({ message: 'Error canceling booking' });
  }
});

// Endpoint to check if an email exists
app.get('/api/users', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.find({ email });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by email:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
});


// Endpoint to fetch users with their bookings
app.get('/api/users-with-bookings', async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find().exec();

    // Fetch bookings for all users
    const usersWithBookings = await Promise.all(users.map(async (user) => {
      const bookings = await Booking.find({ emailId: user.email }).exec();
      return {
        ...user.toObject(),
        bookings
      };
    }));

    res.status(200).json(usersWithBookings);
  } catch (error) {
    console.error('Error fetching users with bookings:', error.message);
    res.status(500).json({ message: 'Error fetching users with bookings', error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
