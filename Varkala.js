import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Varkala Beach (Papanasam Beach).jfif';
import image1 from '../accert/Kappil Lake.jfif';
import image2 from '../accert/Ponnumthuruthu Island.jfif';
import image3 from '../accert/varkala.jfif';

const Destination = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image} alt="Varkala Beach (Papanasam Beach)" />
                        </div>
                        <div className="text-content">
                            <h2>Varkala Beach (Papanasam Beach):</h2><br></br>
                            <p>Varkala Beach (Papanasam Beach), located about 13 km from Munnar in Kerala, is a popular destination for tourists due to its scenic beauty and recreational activities.</p><br></br>
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
                        <h1>Tips for Visiting Kappil Lake</h1>

<div class="tip">
    <h2>Best Time to Visit:</h2>
    <ul>
        <li><strong>Season:</strong> The best time to visit Kappil Lake is during the cooler months, from October to March. The weather is pleasant and ideal for outdoor activities.</li>
        <li><strong>Time of Day:</strong> Early mornings or late afternoons are perfect for witnessing the serene beauty and enjoying cooler temperatures.</li>
    </ul>
</div>

<div class="tip">
    <h2>Travel Essentials:</h2>
    <ul>
        <li><strong>Comfortable Clothing:</strong> Wear light, comfortable clothing and bring a hat or sunglasses to protect yourself from the sun.</li>
        <li><strong>Footwear:</strong> Comfortable walking shoes or sandals are recommended, especially if you plan to explore the surrounding areas.</li>
        <li><strong>Sunscreen and Insect Repellent:</strong> Apply sunscreen to avoid sunburn and use insect repellent to protect yourself from bugs.</li>
    </ul>
</div>

<div class="tip">
    <h2>Boating:</h2>
    <ul>
        <li><strong>Booking:</strong> If you’re interested in a boat ride, check in advance for availability. Some local operators offer boat rides and can provide you with necessary information.</li>
        <li><strong>Safety:</strong> Ensure that you follow safety guidelines provided by the boat operators, including wearing life jackets if required.</li>
    </ul>
</div>

<div class="tip">
    <h2>Photography:</h2>
    <ul>
        <li><strong>Camera Gear:</strong> Bring a camera or smartphone with a good camera to capture the scenic views. The sunrise and sunset views at the lake can be particularly stunning.</li>
        <li><strong>Respect Privacy:</strong> If photographing local people or their activities, seek permission first to respect their privacy.</li>
    </ul>
</div>

<div class="tip">
    <h2>Food and Drink:</h2>
    <ul>
        <li><strong>Refreshments:</strong> There are limited food options near Kappil Lake, so consider carrying some snacks and bottled water with you.</li>
        <li><strong>Local Cuisine:</strong> If you’re interested in trying local cuisine, explore nearby areas for restaurants or cafes.</li>
    </ul>
</div>

<div class="tip">
    <h2>Respect the Environment:</h2>
    <ul>
        <li><strong>Littering:</strong> Avoid littering and make sure to dispose of your waste responsibly. Keep the area clean and respect the natural surroundings.</li>
        <li><strong>Wildlife:</strong> If you spot any local wildlife, observe them from a distance without disturbing them.</li>
    </ul>
</div>

<div class="tip">
    <h2>Local Attractions:</h2>
    <ul>
        <li><strong>Explore Nearby Areas:</strong> Take the opportunity to explore nearby attractions such as Kappil Beach or other local sights. Combining your visit to the lake with nearby attractions can enhance your experience.</li>
    </ul>
</div>

<div class="tip">
    <h2>Transportation:</h2>
    <ul>
        <li><strong>Access:</strong> Ensure you have reliable transportation to and from Kappil Lake, especially if you’re traveling from Varkala or other nearby areas.</li>
        <li><strong>Local Transport:</strong> Check local transportation options or hire a taxi if needed.</li>
    </ul>
</div>

<div class="tip">
    <h2>Local Culture:</h2>
    <ul>
        <li><strong>Engage with Locals:</strong> Engage with local residents and learn about their culture and traditions. They might offer valuable insights and recommendations.</li>
    </ul>
</div>

<div class="tip">
    <h2>Safety:</h2>
    <ul>
        <li><strong>Health Precautions:</strong> If you have any health concerns, such as allergies or other conditions, be sure to bring any necessary medications.</li>
        <li><strong>Emergency Contacts:</strong> Keep emergency contact numbers handy and be aware of the nearest medical facilities.</li>
    </ul>
</div>
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
                           
    <h1>Tips for Visiting Ponnumthuruthu Island</h1>

<div class="tip">
    <h2>Best Time to Visit:</h2>
    <ul>
        <li><strong>Season:</strong> The ideal time to visit Ponnumthuruthu Island is during the cooler months from October to March. The weather is more pleasant and ideal for outdoor activities.</li>
        <li><strong>Time of Day:</strong> Early mornings or late afternoons offer a more tranquil experience and better lighting for photography.</li>
    </ul>
</div>

<div class="tip">
    <h2>Travel Essentials:</h2>
    <ul>
        <li><strong>Comfortable Clothing:</strong> Wear light, breathable clothing, and bring a hat or sunglasses for sun protection.</li>
        <li><strong>Footwear:</strong> Comfortable walking shoes or sandals are recommended, as you might need to walk around or navigate uneven surfaces.</li>
        <li><strong>Sunscreen and Insect Repellent:</strong> Apply sunscreen and use insect repellent to protect yourself from the sun and bugs.</li>
    </ul>
</div>

<div class="tip">
    <h2>Transportation:</h2>
    <ul>
        <li><strong>Access:</strong> Ensure you have reliable transportation to and from the island. You may need to take a boat or ferry from the nearest mainland or jetty.</li>
        <li><strong>Boat Services:</strong> Confirm the schedule and availability of boat services before your visit. Some local operators offer boat rides to the island.</li>
    </ul>
</div>

<div class="tip">
    <h2>Activities:</h2>
    <ul>
        <li><strong>Exploration:</strong> Explore the lush surroundings, and enjoy the serene environment. The island is known for its peaceful atmosphere and scenic beauty.</li>
        <li><strong>Photography:</strong> Bring a camera to capture the picturesque landscapes and natural beauty of the island.</li>
    </ul>
</div>

<div class="tip">
    <h2>Food and Drink:</h2>
    <ul>
        <li><strong>Refreshments:</strong> There may be limited food options on the island, so consider bringing snacks and bottled water.</li>
        <li><strong>Local Cuisine:</strong> If you are interested in trying local food, check for eateries or food stalls near the jetty or in nearby areas.</li>
    </ul>
</div>

<div class="tip">
    <h2>Respect the Environment:</h2>
    <ul>
        <li><strong>Littering:</strong> Maintain cleanliness by disposing of waste properly. Keep the island clean and avoid littering.</li>
        <li><strong>Wildlife:</strong> Observe local wildlife from a distance without disturbing them. Respect their natural habitat.</li>
    </ul>
</div>

<div class="tip">
    <h2>Local Culture:</h2>
    <ul>
        <li><strong>Engage with Locals:</strong> Engage respectfully with local residents and learn about their culture and traditions. They might provide valuable insights about the island.</li>
    </ul>
</div>

<div class="tip">
    <h2>Health and Safety:</h2>
    <ul>
        <li><strong>Health Precautions:</strong> If you have any specific health concerns or allergies, bring any necessary medications.</li>
        <li><strong>Emergency Contacts:</strong> Keep emergency contact numbers handy and be aware of the nearest medical facilities.</li>
    </ul>
</div> </div>
                    </div>
                );
                case 'section4':
                    return (
                        <div className="section-content">
                             <div className="image-container">
                                <img src={image3} alt="valparai" />
                            </div>
                            <div className="text-content">
                            <h1>Tips for Visiting Jatayu Earth's Center</h1>

<div class="tip">
    <h2>Best Time to Visit:</h2>
    <ul>
        <li><strong>Season:</strong> The ideal time to visit Jatayu Earth's Center is from October to March when the weather is cooler and more comfortable for outdoor activities.</li>
        <li><strong>Time of Day:</strong> Early mornings or late afternoons are preferable to avoid the midday heat and to enjoy cooler temperatures and better lighting for photographs.</li>
    </ul>
</div>

<div class="tip">
    <h2>Travel Essentials:</h2>
    <ul>
        <li><strong>Comfortable Clothing:</strong> Wear light, breathable clothing to stay cool. Opt for comfortable walking shoes as you may need to walk long distances.</li>
        <li><strong>Sun Protection:</strong> Apply sunscreen, wear a hat, and use sunglasses to protect yourself from the sun.</li>
        <li><strong>Insect Repellent:</strong> Use insect repellent to guard against mosquito bites, especially if you're visiting during the monsoon season.</li>
    </ul>
</div>

<div class="tip">
    <h2>Transportation:</h2>
    <ul>
        <li><strong>Access:</strong> Ensure you have reliable transportation to and from the center. Consider hiring a taxi or checking local transportation options if you're traveling from nearby cities.</li>
        <li><strong>Parking:</strong> There is ample parking space available at the site. However, it is advisable to arrive early to secure a good parking spot.</li>
    </ul>
</div>

<div class="tip">
    <h2>Activities:</h2>
    <ul>
        <li><strong>Jatayu's Statue:</strong> Don’t miss the chance to see the enormous sculpture of Jatayu, which is a major attraction. Take time to explore and photograph this remarkable structure.</li>
        <li><strong>Adventure Activities:</strong> The center offers various adventure activities like zip-lining and rock climbing. Check availability and book in advance if you are interested.</li>
        <li><strong>Bird’s Eye View:</strong> Enjoy the panoramic views from the observation deck, which provides stunning vistas of the surrounding landscape.</li>
    </ul>
</div>

<div class="tip">
    <h2>Food and Drink:</h2>
    <ul>
        <li><strong>On-Site Dining:</strong> There are cafes and eateries within the center where you can purchase meals and refreshments. Try local snacks and beverages.</li>
        <li><strong>Bringing Your Own:</strong> Consider bringing water and light snacks, especially if you plan to spend the entire day exploring the center.</li>
    </ul>
</div>

<div class="tip">
    <h2>Respect the Environment:</h2>
    <ul>
        <li><strong>Littering:</strong> Keep the area clean by disposing of waste properly in designated bins. Avoid littering to preserve the natural beauty of the site.</li>
        <li><strong>Wildlife:</strong> Respect local wildlife and do not disturb their habitat. Observe from a distance and avoid feeding animals.</li>
    </ul>
</div>

<div class="tip">
    <h2>Local Culture:</h2>
    <ul>
        <li><strong>Engage Respectfully:</strong> Engage with local staff and guides respectfully. Learning about the cultural significance of Jatayu's story can enrich your visit.</li>
    </ul>
</div>

<div class="tip">
    <h2>Health and Safety:</h2>
    <ul>
        <li><strong>Health Precautions:</strong> If you have any health concerns or allergies, bring necessary medications. Ensure you stay hydrated and take breaks as needed.</li>
        <li><strong>Emergency Contacts:</strong> Keep emergency contact numbers handy and be aware of the nearest medical facilities in case of any emergencies.</li>
    </ul>
</div> </div>
                        </div>
                    ); 
            default:
                return null;
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', margin: 0, backgroundColor: 'rgb(51, 219, 155)' }}>
                  <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Varkala Beach (Papanasam Beach)</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}> Kappil Lake</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}> Ponnumthuruthu Island</a>
                <a href="#section3" onClick={() => setActiveSection('section4')}>Jatayu Earth's Center</a>

            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
