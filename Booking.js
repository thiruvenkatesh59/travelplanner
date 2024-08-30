// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from './Modal';
// import './Booking.css';

// const Booking = () => {
//   const [username, setUsername] = useState('');
//   const [destination, setDestination] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [travelers, setTravelers] = useState(1);
//   const [error, setError] = useState('');
//   const [registeredUsers, setRegisteredUsers] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState(null); // Store booking details
//   const [modalAction, setModalAction] = useState(''); // Track modal action

//   const destinationPrices = {
//     'Delhi': 25999,
//     'Bangkok': 59999,
//     'Hong Kong': 79999,
//     'Netherlands': 65999,
//   };

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/users')
//       .then(response => {
//         const normalizedUsers = response.data.map(user => ({
//           ...user,
//           username: user.username.toLowerCase()
//         }));
//         setRegisteredUsers(normalizedUsers);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the registered users!", error);
//       });
//   }, []);

//   useEffect(() => {
//     const pricePerPerson = destinationPrices[destination] || 0;
//     const calculatedAmount = travelers * pricePerPerson;
//     setTotalAmount(calculatedAmount);
//   }, [destination, travelers]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const trimmedUsername = username.trim().toLowerCase();
//     const userExists = registeredUsers.some(user => user.username.toLowerCase() === trimmedUsername);

//     if (!userExists) {
//       setError('Invalid username. Please register first.');
//     } else {
//       setError('');

//       // Set booking details and show the modal
//       setBookingDetails({
//         username: trimmedUsername, // Ensure that the username is stored in lowercase
//         destination,
//         startDate,
//         endDate,
//         travelers,
//         totalAmount,
//       });

//       setModalAction('book'); // Set action to book
//       setShowModal(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleConfirmBooking = () => {
//     axios.post('http://localhost:5000/api/bookings', bookingDetails)
//       .then(response => {
//         console.log(response.data);
//         setShowModal(false);
//         alert('Booking successful!');
//         // Reset the form or navigate to another page if needed
//         setUsername('');
//         setDestination('');
//         setStartDate('');
//         setEndDate('');
//         setTravelers(1);
//       })
//       .catch(error => {
//         console.error('There was an error creating the booking!', error);
//       });
//   };

//   const handleCancelBooking = () => {
//     axios.post('http://localhost:5000/api/bookings/cancel', bookingDetails)
//       .then(response => {
//         console.log(response.data);
//         setShowModal(false);
//         alert('Booking canceled successfully!');
//       })
//       .catch(error => {
//         console.error('There was an error canceling the booking!', error);
//       });
//   };

//   return (
//     <section className="booking" id="booking">
//       <div className="booking-container">
//         <h2>Book Your Trip</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="destination">Destination:</label>
//             <select
//               id="destination"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               required
//             >
//               <option value="">Select a destination</option>
//               {Object.keys(destinationPrices).map(dest => (
//                 <option key={dest} value={dest}>{dest}</option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="startDate">Start Date:</label>
//             <input
//               type="date"
//               id="startDate"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="endDate">End Date:</label>
//             <input
//               type="date"
//               id="endDate"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="travelers">Number of Travelers:</label>
//             <input
//               type="number"
//               id="travelers"
//               value={travelers}
//               onChange={(e) => setTravelers(e.target.value)}
//               min="1"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Total Amount:</label>
//             <p>{totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
//           </div>
//           {error && <p className="error">{error}</p>}
//           <button type="submit" className="booking-btn">Submit</button>
//         </form>
//       </div>

//       {/* Modal Popup */}
//       {showModal && (
//         <Modal onClose={handleCloseModal}>
//           {modalAction === 'book' ? (
//             <>
//               <h3>Confirm Booking</h3>
//               <p>Username: {bookingDetails.username}</p>
//               <p>Destination: {bookingDetails.destination}</p>
//               <p>Start Date: {bookingDetails.startDate}</p>
//               <p>End Date: {bookingDetails.endDate}</p>
//               <p>Number of Travelers: {bookingDetails.travelers}</p>
//               <p>Total Amount: {bookingDetails.totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
//               <button onClick={handleConfirmBooking}>Confirm</button>
//               <button onClick={handleCloseModal}>Cancel</button>
//             </>
//           ) : modalAction === 'cancel' ? (
//             <>
//               <h3>Cancel Booking</h3>
//               <p>Are you sure you want to cancel this booking?</p>
//               <button onClick={handleCancelBooking}>Yes, Cancel Booking</button>
//               <button onClick={handleCloseModal}>No, Go Back</button>
//             </>
//           ) : null}
//         </Modal>
//       )}
//     </section>
//   );
// };

// export default Booking;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import './Booking.css';

const Booking = () => {
  const [emailId, setEmailId] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [error, setError] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [modalAction, setModalAction] = useState('');

  const destinationPrices = {
    'Delhi': 25999,
    'Bangkok': 59999,
    'Hong Kong': 79999,
    'Netherlands': 65999,
  };

  useEffect(() => {
    const pricePerPerson = destinationPrices[destination] || 0;
    const calculatedAmount = travelers * pricePerPerson;
    setTotalAmount(calculatedAmount);
  }, [destination, travelers]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the emailId
    axios.get(`http://localhost:5000/api/users?email=${emailId}`)
      .then(response => {
        if (response.data.length === 0) {
          setError('Invalid emailId. Please register first.');
          return;
        }
  
        setError('');
        setBookingDetails({
          emailId,
          destination,
          startDate,
          endDate,
          travelers,
          totalAmount,
        });
  
        setModalAction('book');
        setShowModal(true);
      })
      .catch(error => {
        console.error("There was an error fetching the user!", error);
        setError('Error validating emailId');
      });
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmBooking = () => {
    axios.post('http://localhost:5000/api/bookings', bookingDetails)
      .then(response => {
        console.log(response.data);
        setShowModal(false);
        alert('Booking successful!');
        setEmailId('');
        setDestination('');
        setStartDate('');
        setEndDate('');
        setTravelers(1);
      })
      .catch(error => {
        console.error('There was an error creating the booking!', error);
      });
  };

  const handleCancelBooking = () => {
    axios.patch(`http://localhost:5000/api/bookings/${bookingDetails._id}/cancel`)
      .then(response => {
        console.log(response.data);
        setShowModal(false);
        alert('Booking canceled successfully!');
        // Refresh the page or redirect to another page if needed
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error canceling the booking!', error);
      });
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h3>Book Your Trip</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailId">Email ID:</label>
            <input
              type="email"
              id="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email ID"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <select
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Select a destination</option>
              {Object.keys(destinationPrices).map(dest => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelers">Number of Travelers:</label>
            <input
              type="number"
              id="travelers"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Total Amount:</label>
            <p>{totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
      </div>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={modalAction === 'book' ? handleConfirmBooking : handleCancelBooking}
        bookingDetails={bookingDetails}
      />
    </section>
  );
};

export default Booking;
