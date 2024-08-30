import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Mattupetty Dam.jpeg';
import image1 from '../accert/Attukal Waterfalls.jpeg';
import image2 from '../accert/Coonoo.jpeg';
import image3 from '../accert/Kotagiri.jpeg';

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
                            <h2>Mattupetty Dam:</h2><br></br>
                            <p>Mattupetty Dam, located about 13 km from Munnar in Kerala, is a popular destination for tourists due to its scenic beauty and recreational activities.</p><br></br>
                            <p>    <h3>Activities at Mattupetty Dam</h3>
    <ul>
        <li>
            <h4>Boating</h4>
            <p>Enjoy a boat ride on the reservoir. You can choose between paddle boats, row boats, and motor boats. Boat rides offer stunning views of the dam and its surroundings.</p>
        </li>
        <li>
            <h4>Picnicking</h4>
            <p>There are designated picnic areas around the dam where you can relax and enjoy a meal. Bring along some snacks and drinks.</p>
        </li>
        <li>
            <h4>Nature Walks</h4>
            <p>Explore the walking paths around the dam and enjoy the serene environment and scenic views.</p>
        </li>
    </ul></p><br></br>
                            <p><h3>Local Amenities at Mattupetty Dam</h3>
    <ul>
        <li >
            <h4>Restrooms</h4>
            <p>Public restrooms are available, but it’s always good to check their cleanliness and availability before heading out.</p>
        </li>
    <li>
            <h4>Food and Drinks</h4>
            <p>There are a few local stalls and eateries near the dam where you can purchase snacks and refreshments. However, bringing your own food is a good idea, especially if you plan to picnic.</p>
        </li>
    </ul></p><br></br>
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
                            <h2> Attukal Waterfalls</h2>
                            <p>
                            Attukal Waterfalls, located about 9 km from Munnar in Kerala, is a beautiful and serene spot known for its cascading waters and lush surroundings.</p><br></br>
                            <p><h3>Activities and Experience at Attukal Waterfalls</h3>
    <div >
        <h4>Photography</h4>
        <p>The waterfall and its surroundings offer fantastic opportunities for photography. Capture the cascading water, scenic landscape, and rich greenery.</p>
    </div>
    <div >
        <h4>Nature Walks</h4>
        <p>Enjoy a leisurely walk around the area to fully appreciate the natural beauty of the falls and its environment. Be cautious on uneven or slippery terrain.</p>
    </div>
    <div >
        <h4>Picnicking</h4>
        <p>There are picnic spots around the waterfall where you can relax and enjoy a meal. Bring along some snacks and refreshments.</p>
    </div></p><br></br>
                            <p> <h2>Local Amenities at Mattupetty Dam</h2>
    <ul>
        <li >
            <h4>Restrooms</h4>
            <p>Public restrooms are available, but it’s always good to check their cleanliness and availability before heading out.</p>
        </li>
        <li >
            <h4>Food and Drinks</h4>
            <p>There are a few local stalls and eateries near the dam where you can purchase snacks and refreshments. However, bringing your own food is a good idea, especially if you plan to picnic.</p>
        </li>
    </ul></p><br></br>
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
                            <h4>Coonoor</h4>
                            <p>  <div class="container">
        <div>
            <h2>Travel Tips</h2>
            <h3>Weather:</h3>
            <ul>
                <li><strong>Best Time to Visit:</strong> The ideal time to visit Coonoor is between March to June and September to November when the weather is pleasant. Winters (December to February) can be chilly, so pack accordingly.</li>
                <li><strong>Clothing:</strong> Wear layers to adjust to temperature changes. A light jacket or sweater is recommended, especially in the evening.</li>
            </ul>
            <h3>Transportation:</h3>
            <ul>
                <li><strong>Getting There:</strong> Coonoor is well connected by road to major cities like Ooty and Coimbatore. If you're traveling from Ooty, the drive takes about 1 hour.</li>
                <li><strong>Local Transport:</strong> Hire a local taxi or auto-rickshaw for easy commuting. For a more immersive experience, consider renting a bicycle or scooter.</li>
            </ul>
            <h3>Accommodation:</h3>
            <ul>
                <li><strong>Booking:</strong> It's wise to book your stay in advance, especially during peak tourist seasons. Coonoor offers a range of accommodations, from luxury resorts to budget hotels.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Sightseeing Tips</h2>
            <h3>Sim's Park:</h3>
            <ul>
                <li><strong>Timing:</strong> Visit in the morning or late afternoon to avoid crowds and enjoy the park's serene atmosphere.</li>
                <li><strong>Walking Shoes:</strong> Wear comfortable walking shoes as the park is spread out and involves some walking.</li>
            </ul>
            <h3>Dolphin's Nose:</h3>
            <ul>
                <li><strong>Photography:</strong> Bring a camera for stunning views and remember to be cautious near the edge.</li>
                <li><strong>Timing:</strong> Visit early in the morning to experience clearer skies and better visibility.</li>
            </ul>
            <h3>Lamb's Rock:</h3>
            <ul>
                <li><strong>Safety:</strong> Be careful while approaching the viewpoint, as the terrain can be uneven.</li>
                <li><strong>Timing:</strong> Try to visit in the morning to avoid foggy conditions that can obscure the view.</li>
            </ul>
        </div>
            </div></p><br></br>
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
                                <h4>Kotagiri</h4>
                                <p> <div class="container">
        <div class="section">
            <h2>Travel Tips</h2>
            <h3>Weather:</h3>
            <ul>
                <li><strong>Best Time to Visit:</strong> The ideal time to visit Coonoor is between March to June and September to November when the weather is pleasant. Winters (December to February) can be chilly, so pack accordingly.</li>
                <li><strong>Clothing:</strong> Wear layers to adjust to temperature changes. A light jacket or sweater is recommended, especially in the evening.</li>
            </ul>
            <h3>Transportation:</h3>
            <ul>
                <li><strong>Getting There:</strong> Coonoor is well connected by road to major cities like Ooty and Coimbatore. If you're traveling from Ooty, the drive takes about 1 hour.</li>
                <li><strong>Local Transport:</strong> Hire a local taxi or auto-rickshaw for easy commuting. For a more immersive experience, consider renting a bicycle or scooter.</li>
            </ul>
            <h3>Accommodation:</h3>
            <ul>
                <li><strong>Booking:</strong> It's wise to book your stay in advance, especially during peak tourist seasons. Coonoor offers a range of accommodations, from luxury resorts to budget hotels.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Sightseeing Tips</h2>
            <h3>Sim's Park:</h3>
            <ul>
                <li><strong>Timing:</strong> Visit in the morning or late afternoon to avoid crowds and enjoy the park's serene atmosphere.</li>
                <li><strong>Walking Shoes:</strong> Wear comfortable walking shoes as the park is spread out and involves some walking.</li>
            </ul>
            <h3>Dolphin's Nose:</h3>
            <ul>
                <li><strong>Photography:</strong> Bring a camera for stunning views and remember to be cautious near the edge.</li>
                <li><strong>Timing:</strong> Visit early in the morning to experience clearer skies and better visibility.</li>
            </ul>
            <h3>Lamb's Rock:</h3>
            <ul>
                <li><strong>Safety:</strong> Be careful while approaching the viewpoint, as the terrain can be uneven.</li>
                <li><strong>Timing:</strong> Try to visit in the morning to avoid foggy conditions that can obscure the view.</li>
            </ul>
        </div>
    </div></p><br></br>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Mattupetty Dam</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}> Attukal Waterfalls</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Coonoor</a>
                <a href="#section3" onClick={() => setActiveSection('section4')}>Kotagiri</a>

            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
