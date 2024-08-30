import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/botani.jpeg';
import image1 from '../accert/lake.jpeg';
import image2 from '../accert/tada.jpeg';
import image3 from '../accert/muse.jpg';
import image4 from '../accert/pykara.jpeg';

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
                            <h1>Botanical Garden</h1><br></br>
                            <p>The Botanical Garden in Ooty is one of the most renowned attractions in the region, drawing visitors with its diverse collection of plants, flowers, and trees. Here's a detailed overview of the Botanical Garden in Ooty.</p><br></br>
                            <p>Location: The Botanical Garden is located in Ooty (Ootacamund), which is in the Nilgiri Hills of Tamil Nadu, India.Establishment: It was established in 1848 by the Marquis of Tweedale, then the Governor of Madras, with the aim of introducing various plants from different parts of the world to the Nilgiri region.</p><br></br>
                            <p><h4>Plant Collection:</h4>

The garden spans over 55 acres and is home to a vast array of plants, including rare species, ornamental plants, medicinal plants, and flowering trees.
It houses a fossilized tree trunk that is estimated to be around 20 million years old, showcasing the rich geological history of the region.
.</p><br></br>
                            <p><h3>Visitor Information</h3><br></br>
<h4>Opening Hours:</h4> The Botanical Garden is typically open from morning till evening, with timings varying slightly based on the season.

.<br></br>
<h4>Entry Fee:</h4> There is a nominal entry fee for visitors, with additional charges during special events and flower shows.<br></br>
<h4>Accessibility:</h4> The garden is easily accessible from the main town of Ooty, making it a popular destination for tourists exploring the Nilgiri region.

Visiting the Botanical Garden in Ooty promises a refreshing and enriching experience, combining natural beauty with educational insights into plant diversity and conservation efforts. </p><br></br>
                   
<center>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.8438107077377!2d76.70881287409632!3d11.418880347017058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bdeb5bbccb7d%3A0x7d64a04cc485b38f!2sGovernment%20Botanical%20Garden!5e0!3m2!1sen!2sin!4v1724410217778!5m2!1sen!2sin"     width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</center>                 
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
                            <h1>Ooty Lake</h1><br></br>
                    <p>Ooty Lake is a prominent tourist attraction in Ooty, Tamil Nadu, offering a serene and picturesque setting amidst the Nilgiri Hills. Here's a detailed overview of Ooty Lake</p><br></br>
                    <p><h4>Location: </h4>Ooty Lake is situated in the heart of Ooty town, surrounded by eucalyptus trees and lush greenery.

<h4>Establishment:</h4> Built in the early 19th century by John Sullivan, the then Collector of Coimbatore.</p><br></br>
                    <p><ul><h3>Activities</h3>
                    <li>Boating</li>
                    <li>Children's Park</li>
                    <li>Miniature Train</li>  
                    <li>Shopping and Food</li>
                    <li>Botanical Garden View</li>  </ul></p><br></br>
                    <p><h3>Visiting Tips</h3>
                   <h4> Best Time to Visit:</h4> Ooty Lake is accessible throughout the year, but the best time to visit is during the summer months (March to May) when the weather is pleasant and conducive for outdoor activities.</p><br></br>
                    <p><h4>Boating Timings:</h4> Boating activities are usually available from morning till evening. It's advisable to check the timings and availability of boats before planning your visit.</p><br></br>
                    <p><h4>Entry Fees: </h4>There is a nominal entry fee for visitors to access the lake premises. Separate charges apply for boating activities.</p><br></br>

                    <center>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.0217802710135!2d76.68360807049069!3d11.405964122502649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd8118098941%3A0xd86f56be477cd846!2sOoty%20Lake%20View%20point!5e0!3m2!1sen!2sin!4v1724410393229!5m2!1sen!2sin"    width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                            <h1>Toda Hill:</h1><br></br>
                            <p>
                            Toda Hill is a distinctive section within the Ooty Botanical Gardens that provides visitors with insights into the culture and heritage of the Toda tribe, an indigenous group native to the Nilgiri Hills of Tamil Nadu, India.</p><br></br>
                            <p><h4>Location:</h4> Toda Hill is located within the expansive grounds of the Ooty Botanical Gardens, situated on the slopes of Doddabetta Peak in Ooty.</p><br></br>
                            <p><h4>Toda Tribal Culture:</h4> Toda Hill serves as a cultural exhibit showcasing the traditional lifestyle, artifacts, and architecture of the Toda tribe. The Todas are known for their unique cultural practices, including distinctive hut-like structures called "munds."

</p><br></br>
                            <p><h3>Visiting Tips</h3>
<h4>Guided Tours: </h4>It is recommended to join guided tours or avail of informational plaques to gain a deeper understanding of Toda culture and traditions.

<h4>Respect for Culture:</h4> Visitors should respect the cultural significance of Toda Hill and refrain from touching or disturbing exhibits without permission.

<h4>Accessibility:</h4> Toda Hill is easily accessible within the Ooty Botanical Gardens and can be explored as part of a larger visit to the gardens and its various attractions.

Toda Hill at the Ooty Botanical Gardens offers a unique cultural experience, allowing visitors to appreciate the rich heritage of the Toda tribe within the tranquil surroundings of one of India’s most renowned botanical gardens.




Get smarter responses, upload files and images, and more.</p><br></br>

<center>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.0217802710135!2d76.68360807049069!3d11.405964122502649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd8118098941%3A0xd86f56be477cd846!2sOoty%20Lake%20View%20point!5e0!3m2!1sen!2sin!4v1724410393229!5m2!1sen!2sin"    width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                            <h1> museum </h1><br></br>
                            <p> Museum in Ooty is a significant cultural and historical institution that showcases various aspects of the region's heritage, including its natural history, anthropology, and art. Here's a detailed overview of the Government Museum in Ooty</p><br></br>
                        <p><h4>Location:</h4> The Government Museum is located on Mysore Road, near the Ooty bus stand and the Ooty Railway Station, making it easily accessible for visitors.

<h4>Establishment and History:</h4>

The museum was established in 1989 with the aim of preserving and promoting the rich cultural and natural heritage of the Nilgiri region.
It is housed in a heritage building that reflects colonial architecture, adding to its historical charm.</p><br></br>
                        <p><h3>Visiting Tips:</h3>

<h4>Opening Hours:</h4> The museum is typically open from morning till evening, with specific timings varying throughout the year.
<h4>Entry Fee:</h4> There is usually a nominal entry fee for visitors, with discounts for students and groups.
<h4>Guided Tours:</h4> Guided tours may be available, providing deeper insights into the exhibits and their significance.
Visiting the Government Museum in Ooty is recommended for anyone interested in exploring the cultural and natural heritage of the Nilgiri Hills, offering a comprehensive experience through its diverse collections and exhibits.




</p><br></br>
                        <p></p><br></br>
                        <center>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.8438107077377!2d76.70881287409632!3d11.418880347017058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bdeb5bbccb7d%3A0x7d64a04cc485b38f!2sGovernment%20Botanical%20Garden!5e0!3m2!1sen!2sin!4v1724410217778!5m2!1sen!2sin"     width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</center>                   

                        </div>
                    </div>
                );
            case 'section5':
                return (
                    <div className="section-content">
                        <div className="image-container">
                            <img src={image4} alt="valparai" />
                        </div>
                        <div className="text-content">
                            <center><h1> Pykara Falls</h1></center><br></br>
                            <p>Pykara Falls is a stunning waterfall located near Ooty in the Nilgiris district of Tamil Nadu, India. Here's a detailed overview of Pykara Falls</p><br></br>
                            <p></p><h3>Location:</h3> Pykara Falls is situated about 19 kilometers from Ooty, in the Pykara village<br></br>
                            <p><h4>Scenic Beauty:</h4> Pykara Falls is renowned for its natural beauty and tranquil surroundings. It cascades down in two sections – the Pykara Upper Falls and the Pykara Lower Falls – amidst lush greenery and rocky terrain.

<h4>Accessibility:</h4> The falls are easily accessible by road, with a short walk required from the parking area to reach the viewing points for both the upper and lower falls.

<h4>Pykara Dam:</h4> Nearby, you can also visit the Pykara Dam and the Pykara Lake, which are popular tourist spots offering boating facilities amidst picturesque landscapes.

<h4>Boating:</h4> At Pykara Lake, visitors can enjoy boating in the serene waters surrounded by hills and forests, providing a scenic experience complemented by views of the nearby Pykara Falls.</p><br></br>
                            <p><h3>Visiting Tips</h3>
<h4>Entry Fee:</h4> There is a nominal entry fee to access the viewing points for Pykara Falls.
<h4>Additional Activities:</h4> Apart from visiting the falls and the dam, you can explore the surrounding forests, indulge in nature walks, or simply relax and enjoy the serene atmosphere.
Pykara Falls is a must-visit destination for nature lovers and those seeking a peaceful retreat amidst the natural beauty of the Nilgiri Hills in Ooty.



</p><br></br>
<center>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.8438107077377!2d76.70881287409632!3d11.418880347017058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bdeb5bbccb7d%3A0x7d64a04cc485b38f!2sGovernment%20Botanical%20Garden!5e0!3m2!1sen!2sin!4v1724410217778!5m2!1sen!2sin"     width="300" height="300" style={{border:"10" ,borderRadius:"10px" ,borderColor:"gray",borderWidth:"10px"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Botanical Garden</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Ooty Lake</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Toda Hill</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Museum </a>
                <a href="#section5" onClick={() => setActiveSection('section5')}> Pykara Falls</a>
            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
