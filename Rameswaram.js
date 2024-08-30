import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Dhanushkodi.jpeg';
import image1 from '../accert/Pamban Bridge.jpeg';
import image2 from '../accert/kuru.jpg';
import image3 from '../accert/Rameshwaram Temple.jpeg';


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
                            <h1>Dhanushkodi</h1><br></br>
                            <p>Dhanushkodi is a fascinating and historically significant place located at the southeastern tip of Pamban Island (also known as Rameswaram Island) in Tamil Nadu, India. Here's more about Dhanushkodi</p><br></br>
                            <p><h4>Activities:</h4> Tourists often enjoy taking a dip in the sea at Dhanushkodi Beach, exploring the remnants of the town, and witnessing the stunning sunset views over the waters. It's also a great place for bird-watching and experiencing the tranquil ambiance away from the hustle and bustle of city life.</p><br></br>
                            <p><h4>Travel Time:</h4> Dhanushkodi is best visited during the daytime. Plan your visit accordingly to enjoy the daylight hours and avoid being there after dark, as facilities are limited and the area can be deserted at night.</p><br></br>
                            <p><h4>Mode of Transport:</h4> The road to Dhanushkodi is a bit rough, especially after the point where regular vehicles are not allowed. You can hire a local jeep or take a guided tour from Rameswaram to reach Dhanushkodi safely. Alternatively, you can opt for a government-approved bus tour that takes you there and back.</p><br></br>
                            <p><h4>Guided Tours:</h4> Consider taking a guided tour to learn more about the history and significance of Dhanushkodi from knowledgeable local guides. They can provide insights and enhance your experience of the place.</p><br></br>

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
                            <h1>Pamban Bridge</h1><br></br>
                            <p>This historic bridge connects Rameswaram Island with the mainland. It is an engineering marvel and offers stunning views of the surrounding waters.</p><br></br>
                            <p><h4>Best Time to Visit:</h4> The bridge is open for pedestrians during specific times, usually in the early morning and evening. Check the local timings beforehand to plan your visit accordingly.</p><br></br>
                            <p><h4>Safety Precautions:</h4> While walking on the bridge, be mindful of passing trains and adhere to safety instructions. Stay within designated areas for pedestrians and avoid venturing onto railway tracks.</p><br></br>
                            <p><h4>Timing:</h4> Plan your visit around the train schedule if you want to witness the lifting of the bridge for passing ships. This happens a few times a day, depending on marine traffic.</p><br></br>
                          <p><h4>Photography:</h4> Pamban Bridge offers spectacular views of the surrounding sea and landscape. It's a great spot for photography enthusiasts, especially during sunrise or sunset. Capture the train passing over the bridge for a unique shot.</p><br></br>  </div>
                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image2} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <h1>Kurusadai Island</h1><br></br>
                            <p>Kurusadai Island is a marine national park near Rameswaram, Tamil Nadu, India, known for its rich biodiversity and serene environment. Here are some tips for tourists planning to visit Kurusadai Island</p><br></br>
                            <p><h4>Permits and Permissions:</h4> Since Kurusadai Island is a protected area, visitors may require permits or permissions from the Forest Department or authorities in Rameswaram before visiting. Ensure you have the necessary paperwork in advance.</p><br></br>
                            <p><h4>Best Time to Visit:</h4> The best time to visit Kurusadai Island is during the winter months (November to February), when the weather is pleasant and conducive for exploring the island and its marine life.</p><br></br>
                            <p><h4>Food and Water:</h4> Pack sufficient drinking water and snacks as facilities on the island may be limited. Avoid leaving any trash behind and practice responsible tourism.</p><br></br>
                            <p><h4>Cameras:</h4> Bring binoculars and cameras to capture the island's scenic beauty, bird species, and marine life. Remember to respect guidelines for photography in protected areas.</p><br></br>
                            <p><h4>Activities:</h4> Enjoy activities such as snorkeling, bird-watching, and nature walks on the island. The coral reefs around the island offer opportunities for snorkeling to observe colorful fish and marine life.</p><br></br>

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
                            <h1> Rameshwaram Temple</h1><br></br>
                            <p>Ramanathaswamy Temple, commonly known as Rameshwaram Temple, is one of the most prominent and sacred temples in India, located in the town of Rameswaram in Tamil Nadu. Here are some tips for tourists planning to visit Rameshwaram Temple</p><br></br>
                            <p><h4>Dress Code:</h4> The temple has a strict dress code. Men are typically required to wear a dhoti (a traditional garment) without shirts, while women are required to wear sarees or traditional attire. If you're not familiar with these customs, you can rent appropriate clothing outside the temple.</p><br></br>
                            <p><h4>Footwear:</h4> Shoes and socks are not allowed inside the temple complex. There are facilities to store your footwear outside the temple premises.</p><br></br>
                            <p><h4>Timing:</h4> The temple timings vary throughout the day due to rituals and ceremonies. Plan your visit accordingly to avoid the busiest times and to witness important rituals like the morning and evening aarti (prayer ceremony).</p><br></br>
                            <p><h4>Photography:</h4> Photography is generally not allowed inside the temple complex. Respect this rule and refrain from taking pictures of the main sanctum sanctorum or during rituals.</p><br></br>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Dhanushkodi</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Pamban Bridge</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Kurusadai Island</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}> Rameshwaram Temple</a>
                         </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
