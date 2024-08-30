import React, { useState } from 'react';
import '../style1.css';
import image from '../accert/Vivekananda.jpeg';
import image1 from '../accert/Thiruvalluvar Statue.jpeg';
import image2 from '../accert/ShreeThanumalayanTemple.jpeg';
import image3 from '../accert/mala.jpeg';
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
                            <h1>Vivekananda Rock Memorial</h1><br></br>
                            <p>
    <h4>Security Check</h4>
    <ul>
        <li>There is a security check before boarding the ferry and before entering the memorial premises. Avoid carrying large bags or prohibited items.</li>
    </ul>

    <h4>Footwear</h4>
    <ul>
        <li>You may need to remove your footwear before entering the temple area. There are designated places to leave your shoes securely.</li>
    </ul>

    <h4>Photography</h4>
    <ul>
        <li>Photography is usually allowed, but check for any restrictions in specific areas, especially inside the temple or memorial.</li>
    </ul>

    <h4>Hydration and Snacks</h4>
    <ul>
        <li>Carry water and some snacks. There are refreshment stalls, but it’s always good to be prepared.</li>
    </ul>

    <h4>Respect and Etiquette</h4>
    <ul>
        <li>Maintain a respectful demeanor, as the memorial is a place of reverence. Keep noise levels down and respect the local customs.</li>
        <li>Consider taking a guided tour if available, to learn more about Swami Vivekananda’s life and the significance of the site.</li>
    </ul>

    <h4>Other Considerations</h4>
    <ul>
        <li>Be aware that the memorial is situated on a rock, so there are stairs to climb. If you have mobility issues, check for accessibility options beforehand.</li>
        <li>If you’re visiting during the monsoon season, be prepared for sudden rains and carry an umbrella or raincoat.</li>
        <li>Carry some cash as not all stalls may accept cards. ATMs are available, but it’s handy to have some cash on hand.</li>
    </ul></p><br></br>
                            <p><center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.231216206432!2d77.5558698!3d8.0778853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed29495d24c1%3A0x7999eb8488b3a3c0!2sVivekananda%20Rock%20Memorial!5e0!3m2!1sen!2sin!4v1722781599063!5m2!1sen!2sin" 
                            width="300" height="300"
                            style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                              </iframe>
                              </center>
                            </p><br></br>
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
                            <h1>Thiruvalluvar Statue</h1>
                            <p><h2>Security Check</h2>
    <ul>
        <li>There is a security check before boarding the ferry to the statue and at the entrance. Avoid carrying large bags or prohibited items.</li>
    </ul>

    <h2>Footwear</h2>
    <ul>
        <li>Footwear is usually required to be removed before entering certain areas. There are designated areas for leaving your shoes securely.</li>
    </ul>

    <h2>Photography</h2>
    <ul>
        <li>Photography is generally allowed, but check for any restrictions in specific areas, especially inside the temple or around the statue.</li>
    </ul>

    <h2>Hydration and Snacks</h2>
    <ul>
        <li>Carry water and some snacks with you. Refreshment stalls are available, but it’s good to be prepared, especially during hot weather.</li>
    </ul>

    <h2>Respect and Etiquette</h2>
    <ul>
        <li>Maintain a respectful demeanor, as the statue is a place of cultural and religious significance. Keep noise levels down and respect local customs.</li>
        <li>Consider joining a guided tour if available to learn more about Thiruvalluvar’s life and the significance of the statue.</li>
    </ul>

    <h2>Accessibility</h2>
    <ul>
        <li>The statue is located on an island, so be prepared for a ferry ride. If you have mobility issues, check for accessibility options beforehand.</li>
    </ul>

    <h2>Weather Precautions</h2>
    <ul>
        <li>If visiting during the monsoon or hot season, carry an umbrella or raincoat, and wear appropriate clothing to stay comfortable.</li>
    </ul>

    <h2>Local Currency</h2>
    <ul>
        <li>Carry some cash as not all stalls may accept cards. ATMs are available, but having cash on hand is convenient.</li>
    </ul></p><br></br>
                            <p>
                                <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2319265718766!2d77.55145540752167!3d8.077812703125089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed29248e505b%3A0xa9250292482cd3a7!2sThiruvalluvar%20Statue!5e0!3m2!1sen!2sin!4v1722781967151!5m2!1sen!2sin"
                             width="300" height="300"
                             style={{border:"100",borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                               </iframe>
                               </center>
                             
                            </p><br></br>
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
                            <p><h1>Suchindram Shree Thanumalayan Swamy Temple</h1>
    <p>Suchindram Shree Thanumalayan Swamy Temple is a significant pilgrimage site located in Suchindram, Kanyakumari District, Tamil Nadu, India. Known for its architectural splendor and religious importance, it attracts many visitors. Here are some tips for tourists visiting the temple:</p>

    <h2>Planning Your Visit</h2>

    <h3>Timing:</h3>
    <ul>
        <li><strong>Best Time to Visit:</strong> The temple is open throughout the year, but the ideal time is from November to March when the weather is cooler.</li>
        <li><strong>Opening Hours:</strong> Typically open from 5:00 AM to 12:00 PM and 4:00 PM to 8:00 PM. Check local timings as they can vary.</li>
    </ul>

    <h3>Dress Code:</h3>
    <ul>
        <li><strong>Modest Dress:</strong> Wear modest clothing, covering shoulders and knees. Traditional attire like sarees or dhotis is often preferred.</li>
        <li><strong>Footwear:</strong> Remove footwear before entering the temple premises. There are usually designated places for leaving shoes.</li>
    </ul>

    <h3>Entry Fees:</h3>
    <ul>
        <li>There is generally no entry fee for the temple. However, donations are welcome and can be made at designated counters.</li>
    </ul>

    <h2>During Your Visit</h2>

    <h3>Respect Local Customs:</h3>
    <ul>
        <li><strong>Behavior:</strong> Maintain a respectful demeanor within the temple premises. Follow any specific instructions given by temple authorities.</li>
        <li><strong>Photography:</strong> Photography may not be allowed inside the sanctum sanctorum. Follow signage or ask for permission.</li>
    </ul>

    <h3>Temple Etiquette:</h3>
    <ul>
        <li><strong>Offerings:</strong> You may offer flowers, fruits, or money at the temple. It's common to purchase these offerings from stalls near the temple.</li>
        <li><strong>Prayers and Rituals:</strong> Observe and participate in the rituals respectfully. If unsure, follow the lead of local devotees.</li>
    </ul></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p>                           <center> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4755497606284!2d77.46515839999999!3d8.1547482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1818d05b6e5%3A0x2ba5b892b06c8c39!2sSuchindram%20Shree%20Thanumalayan%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1722944663379!5m2!1sen!2sin" width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </center></p><br></br>
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
                                <h4>OOty</h4>
                                <p></p><br></br>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Vivekananda Rock Memorial</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Thiruvalluvar Statue</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Suchindram Shree Thanumalayan Swamy Temple</a>
                
            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
