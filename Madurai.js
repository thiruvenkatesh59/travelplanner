import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Baga Beach.jpeg';
import image1 from '../accert/Dudhsagar Waterfalls.jpeg';
import image2 from '../accert/Bondla Wildlife Sanctuary.jpeg';
import image3 from '../accert/Palolem Beach.jpeg';


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
                            <h1>Baga Beach</h1><br></br>
                            <p>Baga Beach, one of Goa's most popular beaches, offers a lively atmosphere with a mix of adventure, relaxation, and entertainment.</p><br></br>
                            <p><h3>Accommodation:</h3>
Hotels and Resorts: There are numerous options ranging from budget stays to luxury resorts. <br></br>Popular choices include:
<ul><li>Taj Holiday Village Resort & Spa</li>
<li>
The Park Baga River</li>
<li>Baga Beach Resort</li></ul></p><br></br>
                            <p><h3>Activities:</h3>
<h4>Water Sports:</h4> Baga Beach is famous for a range of water sports such as parasailing, jet skiing, windsurfing, and banana boat rides. Several operators along the beach offer these activities.<br></br>
<h4>Beach Shacks:</h4> Enjoy delicious Goan cuisine, seafood, and cocktails at the numerous beach shacks. Popular shacks include Britto’s, Shiva Valley, and Tito’s Beach Shack.<br></br>
<h4>Nightlife:</h4> The beach is close to the famous Tito’s Club and Mambo’s, where you can enjoy lively music, dancing, and drinks.<br></br>
</p><br></br>
                            <p><h3>Shopping:</h3>
<h4>Beachside Shops:</h4> Browse through local shops and stalls for souvenirs, clothing, accessories, and handicrafts.
<h4>Anjuna Flea Market:</h4> A short drive away, this market is ideal for shopping for unique souvenirs and eclectic items.
</p><br></br>
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
                            <h1>Dudhsagar Waterfalls</h1><br></br>
                            <p><h3>Activities:</h3>
<h4>Jeep Safari:</h4> A popular option is to take a jeep safari through the Bhagwan Mahavir Wildlife Sanctuary. The ride offers a thrilling off-road experience and beautiful views of the forest and wildlife.<br></br>
<h4>Trekking:</h4> For the adventurous, there are trekking routes to the falls. The most popular trek is from Kulem (Kulem) to the falls, which takes about 2-3 hours.<br></br> It involves crossing railway tracks and navigating through dense jungle.
Swimming: There’s a natural pool at the base of the falls where you can take a refreshing dip. Be cautious as the water can be cold and the currents strong.</p><br></br>
                            <p><h3>Nearby Attractions:</h3>
<h4>Bhagwan Mahavir Wildlife Sanctuary:</h4> Explore this sanctuary known for its rich biodiversity, including the rare black panther and various bird species.
<h4>Mollem National Park:</h4> Adjacent to the wildlife sanctuary, this park offers additional opportunities for wildlife viewing and nature walks.
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
                            <h1>Bondla Wildlife Sanctuary:</h1><br></br>
                            <p>Bondla Wildlife Sanctuary, located in Goa, is a charming and less crowded alternative to some of the state's more famous wildlife destinations. It offers a mix of wildlife viewing, nature walks, and educational experiences.</p><br></br>
                            <p><h3>Attractions and Activities:</h3>
<h4>Wildlife Viewing:</h4> Bondla is home to a variety of animals, including the Indian bison, deer, wild boar, and different species of birds. Keep your eyes peeled for the elusive sambar deer and the colorful Malabar giant squirrel.
<h4>Nature Trails:</h4> The sanctuary offers several nature trails and walking paths where you can enjoy the flora and fauna. The trails are relatively easy and suitable for casual walkers.
<h4>Bondla Zoo:</h4> The sanctuary includes a small zoo with animals such as tigers, leopards, and various birds. It’s a good spot for families with children.
<h4>Botanical Garden:</h4> The botanical garden within the sanctuary showcases various plant species native to the region, adding an educational aspect to your visit.
<h4>Interpretation Centre:</h4> The centre provides information about the local wildlife and conservation efforts. It’s a good place to learn more about the area’s biodiversity.
</p><br></br>
                            <p><h3>Tips for a Great Trip:</h3></p><br></br>
                            <p><h4>Early Visit:</h4> Arriving early in the day increases your chances of spotting wildlife and enjoying cooler temperatures.
<h4>Stay Hydrated:</h4> Carry sufficient water, especially if you plan to walk the trails.
</p><br></br>
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
                            <h1>Palolem Beach</h1><br></br>
                            <p>alolem Beach, located in South Goa, is known for its serene beauty, relaxed atmosphere, and picturesque surroundings. It’s a great destination for those looking to unwind, enjoy the natural beauty, and experience a laid-back beach vibe. </p><br></br>
                            <p>    <h1>Activities and Attractions at Palolem Beach</h1>

<h2>Beach Relaxation:</h2>
<ul>
    <li><strong>Sunbathing and Swimming:</strong> The gentle waves and clean sands make Palolem Beach ideal for sunbathing and swimming. It’s generally safe, but always be cautious of the sea conditions.</li>
    <li><strong>Kayaking and Paddleboarding:</strong> Rent a kayak or paddleboard to explore the serene waters and nearby islands. Some rentals are available right on the beach.</li>
</ul>

<h2>Nearby Islands:</h2>
<ul>
    <li><strong>Butterfly Island:</strong> Take a boat trip to this nearby island known for its beautiful beaches and snorkeling opportunities.</li>
    <li><strong>Dolphin Watching:</strong> Join a boat tour to spot playful dolphins in their natural habitat.</li>
</ul>

<h2>Local Dining and Nightlife:</h2>
<ul>
    <li><strong>Beach Shacks:</strong> Enjoy delicious Goan seafood and international cuisine at popular shacks like <em>Dropadi</em>, <em>Art Resort</em>, and <em>Shiva's Beach Hut</em>.</li>
    <li><strong>Bars and Nightlife:</strong> The beach has a relaxed nightlife with casual bars and beach parties. Check out <em>Silent Noise Club</em> for a unique experience.</li>
</ul>

</p><br></br>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Baga Beach</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Dudhsagar Waterfalls</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Bondla Wildlife Sanctuary</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Palolem Beach</a>
                         </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
