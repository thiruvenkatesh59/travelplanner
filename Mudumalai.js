import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Meghamalai.jpeg';
import image1 from '../accert/Vaigai Dam.jpeg';
import image2 from '../accert/Cumbum Valley.jpeg';
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
                            <h1>Meghamalai </h1><br></br>
                            <p>    <h2>Activities and Attractions in Meghamalai</h2>

<h4>Viewpoints:</h4>
<ul>
    <li><strong>Vellimalai Viewpoint:</strong> Offers panoramic views of the surrounding hills and valleys. It’s a great spot for photography and enjoying the natural beauty.</li>
    <li><strong>Cloud Land Viewpoint:</strong> Known for its misty vistas and beautiful landscapes, especially in the early morning or late afternoon.</li>
</ul>

<h4>Tea Estates:</h4>
<ul>
    <li><strong>Tea Plantations:</strong> Explore the lush tea gardens and learn about tea production. Some estates may offer guided tours and tastings.</li>
</ul>

<h4>Trekking:</h4>
<ul>
    <li><strong>Trekking Trails:</strong> Enjoy nature walks and trekking in the lush hills. Trails vary in difficulty, so choose one that matches your fitness level and interests.</li>
</ul>

<h4>Wildlife Spotting:</h4>
<ul>
    <li><strong>Wildlife:</strong> Keep an eye out for local wildlife, including various species of birds and possibly larger animals in the surrounding forests.</li>
</ul></p><br></br>
                            <p><h2>Nearby Attractions to Meghamalai</h2>

<h4>Kodaikanal:</h4>
<p>Located around 90 km from Meghamalai, Kodaikanal is a popular hill station known for its lakes, gardens, and scenic views.</p>

<h4>Suruli Falls:</h4>
<p>Located around 40 km from Meghamalai, it’s a beautiful waterfall worth visiting if you have additional time.</p>
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
                            <h1>Vaigai Dam</h1>
                            <p><h3>Activities and Attractions at Vaigai Dam</h3>

<h4>Scenic Views:</h4>
<ul>
    <li><strong>Dam View:</strong> Enjoy the panoramic views of the dam and its surrounding landscape. The vast reservoir surrounded by hills offers a picturesque setting, perfect for photography.</li>
    <li><strong>Sunset and Sunrise:</strong> The views are particularly stunning during sunrise and sunset.</li>
</ul>

<h4>Boating:</h4>
<ul>
    <li><strong>Boat Rides:</strong> Enjoy a peaceful boat ride on the reservoir. It’s a relaxing way to take in the natural beauty of the dam and its surroundings.</li>
</ul>

<h4>Picnicking:</h4>
<ul>
    <li><strong>Picnic Spots:</strong> There are designated areas around the dam where you can set up a picnic. Bring along some snacks and enjoy a meal with a view.</li>
</ul>

<h4>Bird Watching:</h4>
<ul>
    <li><strong>Local Wildlife:</strong> The dam area is home to various species of birds and is a good spot for bird watching. Bring binoculars for a closer look.</li>
</ul>
</p><br></br>
                            <p><h3>Nearby Attractions to Vaigai Dam</h3>

<h4>Kodaikanal:</h4>
<p>Located about 90 km from Vaigai Dam, Kodaikanal is a popular hill station with attractions like Kodaikanal Lake, Bryant Park, and Coaker’s Walk.</p>

<h4>Meghamalai:</h4>
<p>Around 100 km from the dam, Meghamalai (High Wavy Mountains) offers scenic viewpoints, tea estates, and trekking opportunities.</p>

<h4>Suruli Falls:</h4>
<p>Located approximately 40 km from Vaigai Dam, Suruli Falls is a beautiful waterfall and a great spot for a day trip.</p>
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
                            <h4>Cumbum Valley</h4>
                            <p><h1>Activities and Attractions in Cumbum Valley</h1>

    <h2>Vineyard Tours:</h2>
    <ul>
        <li><strong>Grape Farms:</strong> Explore the vast grape vineyards in the valley. Some farms offer guided tours where you can learn about grape cultivation, harvesting, and wine production.</li>
        <li><strong>Tasting Sessions:</strong> Enjoy tasting various types of grapes and, in some cases, locally produced wines.</li>
    </ul>

    <h2>Nature Walks:</h2>
    <ul>
        <li><strong>Scenic Walks:</strong> Take a leisurely walk through the lush green landscapes, enjoy the fresh air, and experience the tranquility of the valley.</li>
        <li><strong>Photography:</strong> The valley’s natural beauty and vibrant colors offer excellent opportunities for photography.</li>
    </ul>

    <h2>Local Markets:</h2>
    <ul>
        <li><strong>Fruit Markets:</strong> Visit local markets to buy fresh grapes and other seasonal fruits. The markets also offer local products and handicrafts.</li>
    </ul>

    <h2>Cultural Experiences:</h2>
    <ul>
        <li><strong>Local Cuisine:</strong> Try local Tamil Nadu cuisine in nearby towns and villages. Look for traditional eateries offering authentic meals.</li>
        <li><strong>Festivals:</strong> If you visit during a local festival, you can experience traditional celebrations, music, and dance.</li>
    </ul>
</p><br></br>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Meghamalai</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Vaigai Dam</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Cumbum Valley</a>
               
            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
