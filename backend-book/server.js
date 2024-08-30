const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/booking-details', { useNewUrlParser: true, useUnifiedTopology: true });

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
  username: { type: String, required: true },
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
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      res.status(500).json({ message: 'Error registering user' });
    }
  }
});

// Booking creation endpoint
app.post('/api/bookings', async (req, res) => {
  const { username, destination, startDate, endDate, travelers, totalAmount } = req.body;
  try {
    const newBooking = new Booking({ username, destination, startDate, endDate, travelers, totalAmount });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
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
    res.status(200).json({ message: 'Booking canceled successfully', booking: updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling booking' });
  }
});

// Get all users along with their bookings and canceled bookings endpoint
app.get('/api/users-with-bookings', async (req, res) => {
  try {
    const usersWithBookings = await User.aggregate([
      {
        $lookup: {
          from: 'bookings',
          localField: 'username',
          foreignField: 'username',
          as: 'bookings'
        }
      },
      {
        $addFields: {
          bookings: {
            $filter: {
              input: '$bookings',
              as: 'booking',
              cond: { $eq: ['$$booking.canceled', false] }
            }
          },
          canceledBookings: {
            $filter: {
              input: '$bookings',
              as: 'booking',
              cond: { $eq: ['$$booking.canceled', true] }
            }
          }
        }
      }
    ]);
    res.json(usersWithBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
