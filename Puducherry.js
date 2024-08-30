import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/French Quarter.jpeg';
import image1 from '../accert/Auroville.jpeg';
import image2 from '../accert/Promenade Beach.jpeg';
import image3 from '../accert/Botanical Garden.jpeg';
import image4 from '../accert/Basilica of the Sacred Heart of Jesus.jpeg';

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
                            <h1>French Quarter (White Town)</h1><br></br>
                            <p>Exploring the French Quarter, also known as White Town, in Puducherry (Pondicherry) is a delightful experience, filled with colonial-era architecture, charming streets, and cultural delights. </p><br></br>
                            <p><h4>Walking Tour:</h4> The best way to explore White Town is on foot. Wander through its narrow lanes and boulevards lined with colorful colonial buildings adorned with bougainvillea and vibrant doors. Take your time to admire the unique blend of French and Indian architectural styles.</p><br></br>
                            <p><h4>Photography:</h4> White Town is a photographer's paradise with its picturesque streets and architectural details. Capture the vibrant facades, intricate iron grills, and serene courtyards that make this area so visually appealing.</p><br></br>
                            <p><h4>Cultural Events:</h4> Check for cultural events, art exhibitions, or live music performances happening in White Town. These events often take place in cafes, galleries, or public spaces, adding to the vibrant atmosphere of the neighborhood.</p><br></br>
                            <p><h4>Cafes and Restaurants:</h4> White Town is renowned for its cozy cafes, bakeries, and restaurants serving French and fusion cuisine. Don't miss sampling local delicacies like croissants, quiche, crepes, and Tamil specialties in these atmospheric settings.</p><br></br>                            
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
                            <h1>Auroville</h1>
                            <p>A less crowded alternative to other beaches in Puducherry, Auroville Beach offers a serene environment for relaxation and beach activities. It's known for its golden sands and shallow waters.</p><br></br>
                            <p><h4>Understand the Concept:</h4> Auroville is an experimental township focused on human unity, spiritual development, and sustainable living. Take some time to read about its history and purpose to appreciate its significance.</p><br></br>
                            <p><h4>Respect the Environment:</h4> Auroville places a strong emphasis on environmental sustainability. Respect nature, use eco-friendly products, and be mindful of your ecological footprint.</p><br></br>
                            <p><h4>timing:</h4> Open from 9:00 AM to 4:00 PM (closed on Tuesdays).</p><br></br>
                            <p><h4>Visit the Matrimandir:</h4> This iconic structure is the spiritual center of Auroville. Plan your visit in advance as entry is regulated, and silence is observed inside.</p><br></br>
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
                            <h1>Promenade Beach</h1>
                            <p>Promenade Beach, also known as Rock Beach, is a popular destination in Puducherry (Pondicherry) where locals and tourists alike gather to enjoy the serene coastline and vibrant atmosphere.</p><br></br>
                            <p><h4>Enjoy a Leisurely Walk:</h4> The promenade stretches along the beachfront, offering a perfect setting for a relaxing stroll. Take in the sea breeze, soak up the sun, and admire the views of the Bay of Bengal.</p><br></br>
                            <p><h4>Visit in the Evening:</h4> Promenade Beach is particularly lively in the evenings when the weather cools down. It's a great time to witness stunning sunsets over the sea and enjoy the bustling atmosphere with street vendors and performers.</p><br></br>
                            <p><h4>Photography Opportunities:</h4> Bring your camera or smartphone to capture the scenic views, street scenes, and colorful architecture along the promenade. The blend of French colonial and Tamil architecture provides a picturesque backdrop.</p><br></br>
                             <p><h4>Try Local Snacks and Beverages:</h4> Indulge in local street food and snacks available along the promenade. From crispy bhajjis (fritters) to refreshing coconut water or ice creams, there's plenty to satisfy your taste buds as you stroll.</p><br></br>
                            <p><h4>Plan Nearby Attractions:</h4> Promenade Beach is centrally located, making it convenient to explore other attractions in Puducherry such as the French Quarter (White Town), Aurobindo Ashram, and local markets. Consider combining your visit with nearby sights for a comprehensive experience.</p><br></br>
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
                                <h1>Botanical Garden</h1>
                                <p>Visiting the Botanical Garden in Puducherry is a delightful experience for nature lovers and those interested in exploring the diverse flora of the region.</p><br></br>
                                <p><h4>Opening Hours:</h4> The Botanical Garden is typically open from morning to evening. It's advisable to check the exact timings before your visit to plan accordingly.</p><br></br>
                                <p><h4>Explore the Garden:</h4> The garden is spread over several acres and features a wide variety of plants, trees, flowers, and ponds. Take your time to wander through its different sections and enjoy the peaceful ambiance.</p><br></br>
                                <p><h4>Highlights to See:</h4><br></br>
<h4>French War Memorial:</h4> Located within the garden, this memorial commemorates the soldiers who lost their lives in World War I.<br></br>
<h4>Musical Fountain:</h4> Check the schedule for the musical fountain show, which is a popular attraction in the evenings.</p><br></br>
              <p><h4>Relax and Enjoy:</h4> Lastly, take a moment to relax amidst the greenery. Sit on a bench, listen to the sounds of nature, and unwind from the hustle and bustle of city life.</p><br></br>
                               <p><h4>Nearby Attractions:</h4> Combine your visit to the Botanical Garden with nearby attractions such as the Pondicherry Museum, Bharathi Park, and other historical landmarks in Puducherry.

Relax and En</p><br></br>
                                </div>
                        </div>
                    ); case 'section5':
                    return (
                        <div className="section-content">
                             <div className="image-container">
                                <img src={image4} alt="valparai" />
                            </div>
                            <div className="text-content">
                                <h2>Basilica of the Sacred Heart of Jesus: </h2>
                                <p>Visiting the Basilica of the Sacred Heart of Jesus in Puducherry is a spiritual and architectural highlight. </p><br></br>
                                <p><h4>Respect Religious Customs:</h4> The Basilica is a place of worship, so dress modestly and respectfully. Avoid shorts, sleeveless tops, and revealing clothing out of respect for the sacredness of the place.</p><br></br>
                                <p><h4>Visit Timings:</h4> The Basilica is generally open throughout the day, but specific timings may vary. It's advisable to check the opening hours in advance, especially if you plan to visit during prayer times or special events.</p><br></br>
                                <p><h4>explore Nearby:</h4> The Basilica is located in the heart of Puducherry, near other attractions such as the French Quarter (White Town), Promenade Beach, and local cafes and shops. Consider exploring the area before or after your visit to the Basilica.</p><br></br>
                                </div>
                        </div>
                    );
            default:
                return null;
        }
    };

    return (  <div style={{ display: 'flex', height: '100vh', margin: 0, backgroundColor: 'rgb(51, 219, 155)' }}>
      
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>French Quarter</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Auroville</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Promenade Beach</a>
                <a href="#section3" onClick={() => setActiveSection('section4')}>Botanical Garden</a>
                <a href="#section3" onClick={() => setActiveSection('section5')}>Basilica of the Sacred Heart of Jesus</a>

            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
