import React, { useEffect, useState } from 'react';
import phn from '../accert/phn.jfif';
import git from '../accert/git.png';
import gm from '../accert/gm.png';
import insta from '../accert/insta.jfif';
import './Profile.css';

const UserProfile = () => {
  const [usersWithBookings, setUsersWithBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/users-with-bookings')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setUsersWithBookings(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching user profiles');
        setLoading(false);
      });
  }, []);
  
    const email = 'kthiru52004@gmail.com'; // Replace with your desired email address
    const instagramUrl = 'https://www.instagram.com/itz. thiru';
     // Replace with your Instagram URL
     const phoneNumber = '918870625975'; // Replace with your phone number
     const githubUrl = 'https://github.com/thiruvenkatesh59'; // R

  return (
    <div className="user-profile">
      <div className='back'>
        <h1>User Profiles with Bookings</h1>

        {loading && <p>Loading user profiles...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <table className="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Destination</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Travelers</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {usersWithBookings.length > 0 ? (
                usersWithBookings.map((user, userIndex) => (
                  (user.bookings || []).filter(booking => !booking.canceled).length > 0 ? (
                    (user.bookings || []).filter(booking => !booking.canceled).map((booking, bookingIndex) => (
                      <tr key={`${userIndex}-${bookingIndex}`}>
                        {bookingIndex === 0 && (
                          <>
                            <td rowSpan={user.bookings.filter(b => !b.canceled).length}>{user.username}</td>
                            <td rowSpan={user.bookings.filter(b => !b.canceled).length}>{user.email}</td>
                          </>
                        )}
                        <td>{booking.destination}</td>
                        <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                        <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                        <td>{booking.travelers}</td>
                        <td>{booking.totalAmount.toLocaleString('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                        })}</td>
                      </tr>
                    ))
                  ) : (
                    <tr key={userIndex}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td colSpan="5">No active bookings found</td>
                    </tr>
                  )
                ))
              ) : (
                <tr>
                  <td colSpan="7">No user profiles found</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className='about'>
        <section className="about-us">
          <div className="about">
            <div className="text">
            <div className='n'>  <h2 >About Us</h2>
            </div>
              <div className="card">
                <div className="card__content">
                  <span><i className="ri-double-quotes-l"></i></span>
                  <div className="card__details">
                    <div className="container main-content">
                      <h2>Welcome to [Travel-Planner]</h2>
                      <p>At [Travel-Planner], we believe that travel is more than just visiting new places—it’s about immersing yourself in new cultures, forming meaningful connections, and crafting unforgettable memories. Since our founding in [Year], our mission has been to make travel more accessible, enjoyable, and enriching for everyone.</p>

                      <h2>Who We Are</h2>
                      <p>We are a passionate team of travel enthusiasts, industry experts, and dedicated professionals committed to helping you discover and experience the world. Our diverse team includes seasoned travel writers, destination specialists, and customer service experts who work tirelessly to provide you with tailored, insightful, and inspiring travel content.</p>

                      <h2>What We Offer</h2>
                      <ul>
                        <li><strong>In-Depth Guides:</strong> Our comprehensive travel guides offer insider tips, detailed itineraries, and local insights to help you make the most of your adventures.</li>
                        <li><strong>Curated Experiences:</strong> We handpick tours, activities, and accommodations to match your travel style and interests, ensuring a personalized and memorable experience.</li>
                        <li><strong>Expert Advice:</strong> Our knowledgeable team provides expert recommendations and up-to-date travel advice to help you navigate the latest trends and destinations.</li>
                        <li><strong>Community & Inspiration:</strong> Connect with fellow travelers, share your stories, and find inspiration for your next journey through our vibrant community and engaging blog.</li>
                      </ul>

                      <h2>Our Philosophy</h2>
                      <p>At [Travel-Planner], customer satisfaction is at the heart of everything we do. We understand that your travel experiences are deeply personal and unique, and we are dedicated to ensuring that each journey is tailored to your preferences and exceeds your expectations. Our commitment to providing exceptional service and valuable resources is driven by a genuine passion for helping you explore the world in a way that resonates with you.</p>

                      <h2>Why Choose Us?</h2>
                      <ul>
                        <li><strong>Personalized Service:</strong> We take pride in offering tailored recommendations and support, ensuring that every aspect of your travel experience is customized to your needs.</li>
                        <li><strong>Attention to Detail:</strong> Our team meticulously curates content and experiences to guarantee quality and relevance, so you can travel with confidence.</li>
                        <li><strong>Customer-Centric Approach:</strong> We value your feedback and continuously strive to enhance our services based on your input, ensuring that we meet and surpass your expectations.</li>
                      </ul>

                      <h2>Join Us</h2>
                      <p>Whether you’re a seasoned explorer or planning your first adventure, we invite you to explore our site and join our community of passionate travelers. Let’s embark on journeys that inspire, challenge, and delight.</p>

                      <p>Thank you for choosing [Travel-planner]. We are committed to your satisfaction and look forward to helping you make every trip a remarkable experience.</p>

                      <p>Safe travels,</p>
                      <p>The [Travel-planner] Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="card1">
        <div className='m'><h2>Contact Us</h2></div>

        <div className="hr">
        <div className="contact-container phone-link-container">
      <a href={`tel:${phoneNumber}`} className="contact-link">
      <img src={phn} alt="mobile num" width="50px" height="50px" 
         className="contact-image" 
        />
      </a>
      <p className="contact-text">{+918870625975}</p>
    </div>
  <div className="contact-container email-link-container">
      <a href={`mailto:${email}`} className="contact-link">
      <img src={gm} alt="gmail" width="50px" height="50px" 
           
       className="contact-image" 
        />
      </a>
      <p className="contact-text">{"kthiru52004@gmail.com"}</p>
    </div>
    <div className="contact-container instagram-link-container">
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
      <img src={insta} alt="instagram" width="50px" height="50px" 
        className="contact-image" 
        />
      </a>
      <p className="contact-text">itz. thiru</p>
    </div>
    <div className="contact-container github-link-container">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
      <img src={git} alt="github" width="50px" height="50px" 
     
          className="contact-image" 
        />
      </a>
      <p className="contact-text">thiruvenkatesh59</p>
    </div></div>
    
    </div>
                </div>
             
             
     
    
  );
};

export default UserProfile;
