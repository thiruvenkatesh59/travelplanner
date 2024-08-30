import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/sholardam.jpeg';
import image1 from '../accert/view.jpeg';
import image2 from '../accert/athi.jpeg';
import image3 from '../accert/chinna.jpeg';
import image4 from '../accert/vaz.jpeg';

const Destination = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image} alt="Sholayar Dam" />
                        </div>
                        <div className="text-content">
                            <h1>Sholayar Dam</h1><br></br>
                            <p>The dam is built across the Chalakkudi River, and it is one of the largest dams in Kerala. The reservoir created by the dam is surrounded by picturesque landscapes and provides a serene environment for visitors.</p><br></br>
                            <p>Wildlife Viewing: The area around Sholayar Dam is part of the Anamalai Tiger Reserve, offering opportunities to spot various wildlife species such as elephants, gaur (Indian bison), and occasionally, tigers and leopards. The dam area itself is a great spot for birdwatching.</p><br></br>
                            <p>Scenic Beauty: Surrounded by lush green forests and tea estates, Sholayar Dam offers breathtaking views of the Western Ghats. The drive to the dam itself is picturesque, making it a favorite among nature enthusiasts and photographers.</p><br></br>
                        <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331134.0007004924!2d76.55297700540818!3d10.288347546883681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b078bb29cd5c789%3A0xd49fdeda794f92b3!2sSholayar%20Dam%20View%20Point!5e0!3m2!1sen!2sin!4v1722780816568!5m2!1sen!2sin"width="300" height="300"
                              style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center></div>
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image1} alt="Nallamudi Viewpoint" />
                        </div>
                        <div className="text-content">
                            <h1>Nallamudi Viewpoint</h1><br></br>
                            <p>Nallamudi Viewpoint is a scenic location situated near Valparai, a hill station in the Western Ghats of Tamil Nadu, India. Here's a short note highlighting its attractions and features for tourism:</p><br></br>
                            <p>Location and Accessibility: Nallamudi Viewpoint is located approximately 15 kilometers from Valparai town. It is nestled amidst the verdant hills of the Anamalai range, offering visitors a tranquil and picturesque setting.</p><br></br>
                            <p>Sunrise and Sunset Views: One of the highlights of Nallamudi Viewpoint is the breathtaking views of sunrise and sunset. Visitors can witness the sun casting its golden hues over the hills and valleys, creating a mesmerizing spectacle.</p><br></br>
                         <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1042929765463!2d76.93250860755764!3d10.253171968591154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b078eb0b67b68c1%3A0xfb5ff80603394a99!2sNallamudi%20View%20point!5e0!3m2!1sen!2sin!4v1722781186989!5m2!1sen!2sin"width="300" height="300"
                              style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                </center></div></div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image2} alt="Athirappilly Water Falls" />
                        </div>
                        <div className="text-content">
                            <h1>Athirappilly Water Falls</h1><br></br>
                            <p>Athirappilly Waterfalls, located in Thrissur district of Kerala, India, is often referred to as the "Niagara of India" due to its majestic beauty and grandeur. Here's a short note highlighting its key features and attractions for tourism:</p><br></br>
                            <p>Location and Accessibility: Athirappilly Waterfalls is situated around 60 kilometers from Thrissur city and approximately 5 kilometers from the town of Athirappilly. It is easily accessible by road from both Kochi (Cochin) and Thrissur, making it a popular day trip destination.</p><br></br>
                            <p>Natural Beauty: The waterfall cascades from a height of approximately 24 meters (80 feet) and stretches across the Chalakkudy River. It is surrounded by lush greenery of the Western Ghats, creating a stunning natural setting that captivates visitors.</p><br></br>
                           <center> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4785643109794!2d76.75770250820904!3d10.303532067700672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0789b9e0a3eecf%3A0xac684c1b70b108b7!2sValparai%20-%20Athirapilli%20Rd!5e0!3m2!1sen!2sin!4v1722760111753!5m2!1sen!2sin"
                             width="300" height="300"
                              style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                          </center>   </div>
                    </div>
                );
            case 'section4':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image3} alt="Chinna Kallar" />
                        </div>
                        <div className="text-content">
                            <h1>Chinna Kallar</h1><br></br>
                            <p>Chinnakallar is a lesser-known yet captivating tourist spot near Valparai, nestled in the Anaimalai Hills of the Western Ghats. Here's a brief overview highlighting its attractions for tourism:</p><br></br>
                            <p>Location and Accessibility: Chinnakallar is located approximately 15 kilometers from Valparai town, making it accessible by road. The journey to Chinnakallar is scenic, passing through tea estates and dense forests of the Western Ghats.</p><br></br>
                            <p>Natural Beauty: Chinnakallar is renowned for its natural beauty and serene atmosphere. It is characterized by dense forests, mist-covered hills, and the gentle flow of the Chinnakallar River. The area is rich in biodiversity, with numerous plant and animal species thriving in its ecosystem.</p><br></br>
                           <center> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15702.766185812427!2d76.99847449176063!3d10.28641814969698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0788a02527bc57%3A0x3164f6d09250cecd!2sChinna%20Kallar%2C%20Tamil%20Nadu%20642127!5e0!3m2!1sen!2sin!4v1722760361776!5m2!1sen!2sin" width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </center></div>
                    </div>
                );
            case 'section5':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image4} alt="Vazhachal Waterfalls" />
                        </div>
                        <div className="text-content">
                            <center><h1>Vazhachal Waterfalls</h1></center><br></br>
                            <p>Vazhachal Waterfalls, located near Athirappilly in Kerala, India, is a stunning cascade renowned for its natural beauty and scenic surroundings. Here's an overview highlighting its attractions for tourism:</p><br></br>
                            <p>Location and Accessibility: Vazhachal Waterfalls is situated around 5 kilometers downstream from Athirappilly Waterfalls, on the Chalakkudy River. It is easily accessible by road from both Kochi (Cochin) and Thrissur, making it a popular stop for tourists exploring the region.</p><br></br>
                            <p>Natural Beauty: The waterfall descends from a height of approximately 24 meters (80 feet) amidst the lush greenery of the Western Ghats. The surrounding forested hills and the roaring sound of the cascading water create a mesmerizing natural spectacle.</p><br></br>
                          <center>  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125178.78356807274!2d77.63299344512042!3d11.346614719427693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722753158000!5m2!1sen!2sin"width="300" height="300"
                              style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center></div>
       </div>
                
                );
            default:
                return null;
        }
    };

    return (
        <div className="main-container">
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Sholayar Dam</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Nallamudi Viewpoint</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Athirappilly Water Falls</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Chinna Kallar</a>
                <a href="#section5" onClick={() => setActiveSection('section5')}>Vazhachal Waterfalls</a>
            </div>
            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
