import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/shore.jpeg';
import image1 from '../accert/mahabali.jpeg';
import image2 from '../accert/pancha.jpeg';
import image3 from '../accert/varsha.jpeg';

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
                            <h1>Shore Temple</h1><br></br>
                            <p>The Shore Temple in Mahabalipuram, Tamil Nadu, is a remarkable example of ancient South Indian temple architecture and a UNESCO World Heritage Site. Here's a detailed overview of the Shore Temple</p><br></br>
                            <p><h3>Location:</h3> The Shore Temple is located in Mahabalipuram, along the Coromandel Coast of the Bay of Bengal, approximately 58 kilometers south of Chennai (Madras).</p><br></br>
                            <p><h3>Construction:</h3> Carved out of granite blocks, the temple complex originally consisted of three shrines dedicated to Lord Shiva and Vishnu. Over time, the temple has suffered from the erosion caused by wind and sea spray due to its proximity to the shore.</p><br></br>
                            <p><h3>Visiting Tips</h3>
<h4>Best Time to Visit:</h4> Early mornings or evenings are ideal for visiting the Shore Temple to witness the mesmerizing views and experience the spiritual ambiance.
<h4>Entry Fee:</h4> There is an entry fee for visitors to access the temple complex. Foreign tourists may have a separate fee structure.
<h4>Photography:</h4> Photography is allowed within the temple premises, but drone photography and videography may be restricted.<br></br>
The Shore Temple in Mahabalipuram stands as a testament to the architectural brilliance and cultural richness of ancient India, drawing visitors from around the world to admire its beauty and historical significance.
</p><br></br>
<center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.4804293566467!2d80.19675717411447!3d12.616456722567037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53acae4b91fd6f%3A0xaa128d8a959b1141!2sMahabalipuram%20Shore%20Temple!5e0!3m2!1sen!2sin!4v1724409456881!5m2!1sen!2sin"  width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</center>                       </div>
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image1} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <h1>mahabalipuram temple</h1><br></br>
                            <p>Mahabalipuram (Mamallapuram), exploring the rich cultural heritage and ancient temples is a fascinating experience. Here’s a guide to some of the key temples and monuments in Mahabalipuram that are popular among tourists</p><br></br>
                            <p><h3>Visiting Tips</h3></p><br></br>
                            <p><h4>Best Time to Visit:</h4> Early mornings or evenings are ideal for exploring the temples, especially to witness sunrise or sunset at the Shore Temple.</p><br></br>
                            <p><h4>Entry Fees:</h4> There is a nominal entry fee for each monument, and visitors can purchase a combined ticket for multiple sites.
                        </p><br></br>
                            <p><h4>Guided Tours:</h4> Consider taking a guided tour to gain deeper insights into the history, architecture, and mythology associated with each temple.</p><br></br>
                            <p><h4>Photography:</h4> Photography is allowed at most sites, but check for any specific restrictions or fees for cameras and drones.<br></br>
Exploring these temples and monuments in Mahabalipuram offers a journey through time, showcasing the cultural and artistic heritage of ancient India. It's a memorable experience that blends spirituality, history, and architectural marvels in a picturesque coastal setting.



</p><br></br>
<center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.413224872029!2d80.1898867706165!3d12.620874395230292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53ad11115573a5%3A0xea031b86c03bd99e!2sMahabalipuram%20Temple!5e0!3m2!1sen!2sin!4v1724409689587!5m2!1sen!2sin"   width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</center>
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
                            <h1>pancha rathas</h1><br></br>
         <p>The Pancha Rathas (Five Rathas) in Mahabalipuram are not just architectural marvels but also significant tourist attractions due to their historical, cultural, and artistic importance. Here's why they are popular among tourists</p><br></br>                   
        <h3>Tourist Experience:</h3>
        <ul>
            <li><strong>Scenic Surroundings:</strong> Located in a picturesque setting within the Mahabalipuram complex, the Pancha Rathas offer visitors an opportunity to appreciate the natural beauty of the Coromandel Coast.</li>
            <li><strong>Photography:</strong> The architectural beauty and the coastal backdrop make the Pancha Rathas a favorite spot for photography enthusiasts, especially during sunrise or sunset.</li>
            <li><strong>Educational Value:</strong> Tourists can learn about ancient Indian history, architecture, and religious practices through guided tours and informational displays at the site.</li>
        </ul>

        <h3>Practical Tips for Visitors:</h3>
        <ul>
            <li><strong>Timing:</strong> Visit early morning or late afternoon to avoid the midday heat and to capture the best light for photography.</li>
            <li><strong>Guided Tours:</strong> Consider taking a guided tour to gain deeper insights into the history, architecture, and significance of each ratha.</li>
            <li><strong>Entry Fees:</strong> There is a nominal entry fee for visitors to access the Mahabalipuram complex, which includes the Pancha Rathas and other monuments.</li>
            <li><strong>Accessibility:</strong> The site is well-maintained with pathways and signage, making it accessible for visitors of all ages.</li>
        </ul>
        
        <p>Visiting the Pancha Rathas in Mahabalipuram offers a journey through time, providing a glimpse into the artistic and architectural achievements of ancient India. It remains a highlight for tourists seeking to explore India's rich cultural heritage and architectural splendor.</p>
    
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <p></p><br></br>
                            <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.5953604484416!2d80.18703807411438!3d12.608898222728458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53aca8e8c75fd7%3A0xcd7d060742199af9!2sFive%20Rathas%20(Pancha%20Rathas)!5e0!3m2!1sen!2sin!4v1724409948759!5m2!1sen!2sin"    width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </center>
   
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
                        <h1>The Varaha Cave Temple in Mahabalipuram</h1><br></br>
                        <p>The Varaha Cave Temple is a rock-cut cave temple dedicated to Lord Vishnu, specifically depicting him in his Varaha avatar, which is the boar incarnation. Carved out of a single granite rock, the temple exemplifies early Dravidian architecture from the Pallava dynasty period (7th to 8th centuries AD).</p><br></br>
                            <p><h3>Architectural Features:</h3>
<h4>Structure:</h4> The temple consists of a small mandapa (hall), a front-facing pillared veranda, and a sanctum sanctorum (shrine).
<h4>Carvings:</h4> Intricate bas-reliefs adorn the interiors, illustrating scenes from Hindu mythology. The central motif depicts Lord Vishnu as Varaha rescuing Goddess Earth (Bhudevi) from the demon Hiranyaksha. This iconic depiction symbolizes the triumph of good over evil.</p><br></br>
                            <p><h3>Visiting Experience:</h3>
<h4>Location:</h4> Situated within the Mahabalipuram complex, a UNESCO World Heritage Site, the temple offers visitors a serene and historically rich environment.
<h4>Educational Value:</h4> Tourists can appreciate and learn about ancient Indian art, architecture, and religious practices through the temple's intricate carvings and historical context.
<h4>Accessibility:</h4> The site is well-maintained, with pathways and signage, ensuring it is accessible for visitors of all ages.
Visiting the Varaha Cave Temple in Mahabalipuram provides a profound insight into the cultural and architectural achievements of ancient India. It remains a cherished destination for history enthusiasts, art lovers, and spiritual seekers alike, offering a glimpse into the region's rich heritage and enduring artistic legacy.</p><br></br>
                            
<center>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.455667385993!2d80.1897306741145!3d12.61808462253223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53aca95a952391%3A0x9fd269774a97736d!2sVaraha%20Cave!5e0!3m2!1sen!2sin!4v1724410013611!5m2!1sen!2sin"    width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</center>                   
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Shore Temple</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Mahabalipuram Temple</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>pancha rathas</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>VarahaCave Temple</a>
                </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
