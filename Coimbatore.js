import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Marudamalai.jpeg';
import image1 from '../accert/Isha Foundation.jpeg';
import image2 from '../accert/Siruvani Waterfalls.jpeg';
import image3 from '../accert/Black Thunder.jpeg';
import image4 from '../accert/mala.jpeg';

const Destination = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <h4>Marudamalai Temple:</h4><br></br>
                            <p>Marudamalai Temple, dedicated to Lord Murugan, is a prominent Hindu pilgrimage site located in Tamil Nadu, India. If you’re planning to visit, here are some tips to make your trip enjoyable and respectful</p><br></br>
                            <p>    <h2>Preparation Before the Visit:</h2>
    <ul>
        <li><strong>Check Opening Hours:</strong>
            <p>Confirm the temple’s opening hours and any special timings for darshan (viewing the deity). Temples often have specific times for worship and rituals.</p>
        </li>
        <li><strong>Dress Code:</strong>
            <p>Wear traditional or conservative clothing. For men, dhoti or long pants with a shirt is ideal, while women should opt for sarees or salwar kameez. Avoid wearing revealing or flashy clothing.</p>
        </li>
        <li><strong>Travel Arrangements:</strong>
            <p>Plan your travel to and from the temple. The temple is situated on a hill, so be prepared for a bit of a climb. Comfortable footwear is essential.</p>
        </li>
    </ul></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>


                            
                            </div>
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image1} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <h4>Isha Foundation</h4>
                            <p><ul>
        <li><strong>Check Schedule and Availability:</strong>
            <p>Review the schedule for programs, activities, and events at the Isha Foundation. Some programs may require advance registration, so check their website or contact them ahead of time.</p>
        </li>
        <li><strong>Dress Code:</strong>
            <p>Wear comfortable, modest clothing. The Isha Foundation emphasizes simplicity and modesty, so avoid wearing revealing or flashy outfits. For yoga sessions, loose, breathable clothing is recommended.</p>
        </li>
        <li><strong>Travel Arrangements:</strong>
            <p>Plan your travel and accommodation in advance. Isha Foundation has on-site accommodation options, but these can fill up quickly. Consider booking early if you wish to stay on the premises.</p>
        </li>
        <li><strong>Health and Safety:</strong>
            <p>If you have any health concerns, inform the staff before participating in physical activities. Ensure you have any necessary medications and stay hydrated.</p>
        </li>
    </ul>

    <h2>During the Visit:</h2>
    <ul>
        <li><strong>Respect the Atmosphere:</strong>
            <p>Maintain a calm and respectful demeanor. The environment at Isha Foundation is designed for tranquility and spiritual growth, so adhere to the guidelines for behavior.</p>
        </li>
        <li><strong>Follow Instructions:</strong>
            <p>Pay attention to and follow any instructions provided by the staff or volunteers. This is especially important during meditation or yoga sessions to ensure a safe and effective experience.</p>
        </li>
        <li><strong>Participate in Programs:</strong>
            <p>Engage in the programs and activities offered. Whether it's yoga, meditation, or other spiritual practices, participation enhances the experience.</p>
        </li>
        <li><strong>Photography and Mobile Phones:</strong>
            <p>Photography may be restricted in certain areas. Ensure you follow any rules regarding mobile phones and cameras to respect the sacredness of the environment.</p>
        </li>
        <li><strong>Food and Refreshments:</strong>
            <p>If meals are provided, follow the schedule and dietary guidelines. Isha Foundation often provides simple, vegetarian food that aligns with their philosophy.</p>
        </li>
    </ul>
</p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            </div>
                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                         <div className="image-container">
                            <img src={image2} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <h4>Siruvani Waterfalls</h4>
                            <p><ul>
        <li><strong>Check Access and Timing:</strong>
            <p>Confirm the opening hours and accessibility of the Siruvani Waterfalls. Some areas may have restricted access or specific visiting hours, so it's best to verify before you go.</p>
        </li>
        <li><strong>Permits and Entry Fees:</strong>
            <p>Check if you need any permits or if there are entry fees. Some areas around the waterfalls may require special permissions, especially if they are within protected zones.</p>
        </li>
        <li><strong>Weather Conditions:</strong>
            <p>Check the weather forecast before your visit. The area can be wet and slippery, especially during or after rainfall. Plan accordingly for safe travel.</p>
        </li>
        <li><strong>Travel Arrangements:</strong>
            <p>Plan your travel route to the waterfalls. The journey might involve winding roads, so ensure your transportation is reliable and comfortable.</p>
        </li>
    </ul>

    <h2>During the Visit:</h2>
    <ul>
        <li><strong>Respect the Environment:</strong>
            <p>Follow all guidelines for preserving the natural beauty of the area. Avoid littering and stay on designated paths to protect the ecosystem.</p>
        </li>
        <li><strong>Wear Appropriate Footwear:</strong>
            <p>Wear sturdy, non-slip footwear as the paths near the waterfalls can be slippery. Comfortable walking shoes or hiking boots are recommended.</p>
        </li>
        <li><strong>Stay Hydrated and Bring Snacks:</strong>
            <p>Carry water and some snacks with you. There may not be facilities nearby, so it's wise to be prepared, especially if you plan on spending a few hours there.</p>
        </li>
        <li><strong>Safety First:</strong>
            <p>Be cautious around the water. The rocks and terrain can be slippery, and swimming in certain areas may not be permitted or safe. Always follow safety instructions.</p>
        </li>
        <li><strong>Photography:</strong>
            <p>If photography is allowed, take care to avoid disturbing the natural setting. Respect any guidelines regarding the use of cameras.</p>
        </li>
    </ul></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            </div>
                    </div>
                );
                case 'section4':
                    return (
                        <div className="section-content">
                             <div className="image-container">
                                <img src={image3} alt="valparai" />
                            </div>
                            <div className="text-content">
                                <h4>Black Thunder</h4>
                                <p>    <ul>
        <li><strong>Check Opening Hours:</strong>
            <p>Verify the park's opening hours and any special events or maintenance schedules. The park's website or customer service can provide this information.</p>
        </li>
        <li><strong>Buy Tickets in Advance:</strong>
            <p>Consider purchasing tickets online to avoid long queues at the entrance. Check for any discounts or package deals available.</p>
        </li>
        <li><strong>Weather Considerations:</strong>
            <p>Check the weather forecast before your visit. The park is more enjoyable on a clear day, and some rides may be affected by rain.</p>
        </li>
        <li><strong>Travel and Parking:</strong>
            <p>Plan your travel route and parking arrangements. The park can get crowded on weekends and holidays, so arriving early can help you find parking more easily.</p>
        </li>
        <li><strong>Dress Comfortably:</strong>
            <p>Wear comfortable clothing and sturdy shoes, as you'll be walking a lot. Swimsuits and appropriate gear may be needed for water rides.</p>
        </li>
    </ul>

    <h2>During the Visit:</h2>
    <ul>
        <li><strong>Stay Hydrated:</strong>
            <p>Carry a water bottle and drink plenty of fluids throughout the day. The park can be hot and sunny, so staying hydrated is important.</p>
        </li>
        <li><strong>Follow Safety Guidelines:</strong>
            <p>Adhere to all safety instructions and height restrictions for rides. Listen to the staff and follow the rules to ensure a safe experience.</p>
        </li>
        <li><strong>Use Lockers:</strong>
            <p>Consider renting a locker to store your valuables. This will keep your belongings safe while you enjoy the rides and attractions.</p>
        </li>
        <li><strong>Plan Your Day:</strong>
            <p>Review the park map and plan which rides and attractions you want to visit. Prioritize the most popular rides early in the day to avoid long wait times.</p>
        </li>
        <li><strong>Photographs:</strong>
            <p>Capture your memories, but be mindful of ride rules regarding cameras. Some rides may have restrictions on taking photos.</p>
        </li>
    </ul>
</p><br></br>
                                <p></p><br></br>
                                <p></p><br></br>
                                <p></p><br></br>
                                </div>
                        </div>
                    ); case 'section5':
                    return (
                        <div className="section-content">
                             <div className="image-container">
                                <img src={image4} alt="valparai" />
                            </div>
                            <div className="text-content">
                                <h4>OOty</h4>
                                <p></p><br></br>
                                <p></p><br></br>
                                <p></p><br></br>
                                <p></p><br></br>
                                </div>
                        </div>
                    );
            default:
                return null;
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', margin: 0, backgroundColor: 'rgb(51, 219, 155)' }}>
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Marudamalai Temple</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Isha Foundation</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Siruvani Waterfalls</a>
                <a href="#section3" onClick={() => setActiveSection('section4')}>Black Thunder</a>

            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
