import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const Modal = ({ show, handleClose, handleConfirm, bookingDetails }) => {
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  if (!show) {
    return null;
  }

  const handleCancel = () => {
    setShowCancelConfirmation(true);
  };

  const confirmCancel = async () => {
    setShowCancelConfirmation(false);
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${bookingDetails._id}/cancel`);
      setResponseMessage('Booking canceled successfully');
    } catch (error) {
      setResponseMessage('Error canceling booking');
      console.error('Error canceling booking:', error);
    }
  };

  const cancelCancel = () => {
    setShowCancelConfirmation(false);
  };

  const closePopup = () => {
    setResponseMessage('');
    handleClose();
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Booking Details</h2>
        {bookingDetails && (
          <>
            <p><strong>Email ID:</strong> {bookingDetails.emailId}</p>
            <p><strong>Destination:</strong> {bookingDetails.destination}</p>
            <p><strong>Start Date:</strong> {new Date(bookingDetails.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(bookingDetails.endDate).toLocaleDateString()}</p>
            <p><strong>Travelers:</strong> {bookingDetails.travelers}</p>
            <p><strong>Total Amount:</strong> {bookingDetails.totalAmount.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}</p>
          </>
        )}
        <button onClick={handleConfirm} className="btn btn-primary">Confirm Booking</button>
        <button onClick={handleCancel} className="btn btn-secondary">Cancel Booking</button>

        {showCancelConfirmation && (
          <div className="modal cancel-confirmation-modal">
            <div className="modal-content">
              <h2>Confirm Cancellation</h2>
              <p>Are you sure you want to cancel the booking?</p>
              <button onClick={confirmCancel} className="btn btn-danger">Yes, Cancel Booking</button>
              <button onClick={cancelCancel} className="btn btn-secondary">No, Go Back</button>
            </div>
          </div>
        )}

        {responseMessage && (
          <div className="popup-box">
            <div className="popup-content">
              <p>{responseMessage}</p>
              <button onClick={closePopup} className="btn btn-primary">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;



