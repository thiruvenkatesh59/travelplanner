import React, { useState } from 'react';
import '../style1.css'; // Make sure to import the CSS file
import image from '../accert/Mahe Beach.jfif';
import image1 from '../accert/Parassinikkadavu Snake Park.jfif';
import image2 from '../accert/Riverside Promenade1.jfif';
import image3 from '../accert/hillock.jpg';

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
                            
    <h1>Travel Tips for Mahe Beach</h1>
    <div class="tips">
        <h2>Essential Tips for a Great Experience</h2>
        <ul>
            <li><strong>Best Time to Visit:</strong> Visit Mahe Beach between November and March to enjoy pleasant weather. The temperature is comfortable, and the beach is less crowded.</li>
            <li><strong>Sun Protection:</strong> The sun can be quite strong, so make sure to apply sunscreen regularly, wear a hat, and use sunglasses to protect yourself from UV rays.</li>
            <li><strong>Stay Hydrated:</strong> Bring plenty of water to stay hydrated, especially if you plan to spend a lot of time in the sun.</li>
            <li><strong>Beachwear:</strong> Wear appropriate beachwear and bring a change of clothes. If you plan to swim, remember to carry swimwear and a towel.</li>
            <li><strong>Respect Local Customs:</strong> Mahe Beach is a public area, so respect local customs and norms. Keep the beach clean and dispose of trash properly.</li>
            <li><strong>Safety:</strong> Always swim in designated swimming areas and be mindful of any safety advisories or warnings. It’s also a good idea to keep an eye on your belongings.</li>
            <li><strong>Local Cuisine:</strong> Explore local food options available near the beach. Enjoy fresh seafood and regional dishes at nearby eateries.</li>
            <li><strong>Activities:</strong> Engage in beach activities like beach volleyball, building sandcastles, or simply relaxing under an umbrella. Watch for local vendors offering beach sports equipment.</li>
            <li><strong>Photographs:</strong> Don’t forget to bring your camera or smartphone to capture the beautiful sunsets and scenic views of the beach.</li>
            <li><strong>Accessibility:</strong> Ensure you have transportation arranged to and from the beach, especially if you are visiting from other parts of Mahe.</li>
        </ul>
    </div>

                            
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
                            <h1>Travel Tips for Parassinikkadavu Snake Park</h1>
    <div class="tips">
        <h2>Essential Tips for a Memorable Visit</h2>
        <ul>
            <li><strong>Best Time to Visit:</strong> The park is open year-round, but visiting during the cooler months from November to February will make your experience more comfortable.</li>
            <li><strong>Timing:</strong> Plan to spend a few hours at the park. The park is typically less crowded in the morning, which might provide a better experience.</li>
            <li><strong>Dress Appropriately:</strong> Wear comfortable clothing and closed-toe shoes. The park involves walking and may be a bit humid.</li>
            <li><strong>Follow Safety Instructions:</strong> Adhere to the park’s rules and guidelines, especially regarding safety around the snake enclosures. Do not attempt to touch or provoke the snakes.</li>
            <li><strong>Stay Hydrated:</strong> Carry a bottle of water, as walking around the park can be tiring. Ensure you stay hydrated, especially in warmer weather.</li>
            <li><strong>Photography:</strong> Photography is often allowed, but be respectful of the park’s guidelines. Some areas or animals might have restrictions on photography.</li>
            <li><strong>Respect Wildlife:</strong> Maintain a respectful distance from the snakes and other animals. Do not disturb them or their habitats.</li>
            <li><strong>Guide Tours:</strong> Consider joining a guided tour if available. It can provide deeper insights into the various species and their conservation status.</li>
            <li><strong>Local Cuisine:</strong> There may be food stalls or local eateries near the park. Sampling local cuisine can enhance your visit.</li>
            <li><strong>Accessibility:</strong> Ensure you have transportation arranged to and from the park. Check for parking availability if driving yourself.</li>
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
                            
    <h1>Travel Tips for Riverside Promenade in Mahe</h1>
    <div class="tips">
        <h2>Essential Tips for a Pleasant Visit</h2>
        <ul>
            <li><strong>Best Time to Visit:</strong> The Riverside Promenade is most enjoyable in the early morning or late afternoon. The weather is cooler, and you can enjoy the scenic views without the midday heat.</li>
            <li><strong>Dress Comfortably:</strong> Wear comfortable clothing and walking shoes. The promenade is perfect for a leisurely stroll, so dress accordingly to enjoy the experience.</li>
            <li><strong>Stay Hydrated:</strong> Carry a bottle of water, especially if you plan to walk for a while. Staying hydrated is important, particularly in warm weather.</li>
            <li><strong>Respect the Environment:</strong> Keep the promenade clean by disposing of trash properly. Respect local wildlife and avoid disturbing any plants or animals.</li>
            <li><strong>Photography:</strong> Bring a camera or smartphone to capture the beautiful riverside views. Early morning or late afternoon light provides the best photo opportunities.</li>
            <li><strong>Safety:</strong> Be mindful of your surroundings, especially if you are visiting alone. Stick to well-lit areas and follow any posted safety guidelines.</li>
            <li><strong>Local Attractions:</strong> Explore nearby attractions and eateries. The promenade area might have local shops or food stalls where you can experience regional cuisine.</li>
            <li><strong>Accessibility:</strong> Check the accessibility features of the promenade if you have specific needs. Ensure that the pathways are comfortable for walking or wheelchairs.</li>
            <li><strong>Weather Considerations:</strong> Check the weather forecast before heading out. Be prepared for sudden changes in weather, and consider carrying an umbrella or light rain jacket if necessary.</li>
            <li><strong>Transportation:</strong> Plan your transportation to and from the promenade. Parking facilities might be available, or you can use public transport depending on your location.</li>
        </ul>
    </div>
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
                            <h1>Travel Tips for Hillock (Mooppenkunnu) in Mahe</h1>
    <div class="tips">
        <h2>Essential Tips for a Memorable Visit</h2>
        <ul>
            <li><strong>Best Time to Visit:</strong> Early morning or late afternoon is ideal for visiting Hillock (Mooppenkunnu). The weather is cooler, and you can enjoy the panoramic views at sunrise or sunset.</li>
            <li><strong>Comfortable Footwear:</strong> Wear sturdy and comfortable walking shoes. The terrain can be uneven, so appropriate footwear is essential for a safe and enjoyable hike.</li>
            <li><strong>Hydration:</strong> Bring along plenty of water to stay hydrated, especially if you plan to hike up the hill. Dehydration can occur quickly in warm weather.</li>
            <li><strong>Local Wildlife:</strong> Be mindful of the local flora and fauna. Avoid disturbing wildlife and stay on designated paths to preserve the natural environment.</li>
            <li><strong>Photography:</strong> Don't forget your camera or smartphone. The hill offers fantastic views and photo opportunities, especially at the top where you can capture the surrounding landscape.</li>
            <li><strong>Weather Preparedness:</strong> Check the weather forecast before heading out. Be prepared for sudden changes, and consider carrying a light rain jacket or umbrella if necessary.</li>
            <li><strong>Respect Nature:</strong> Follow the principle of 'leave no trace.' Avoid littering and respect nature by not picking plants or disturbing wildlife.</li>
            <li><strong>Guides and Maps:</strong> If you're unfamiliar with the area, consider taking a local guide or using a map. This can enhance your experience and ensure you don’t get lost.</li>
            <li><strong>Safety First:</strong> Inform someone about your visit and expected return time. Mobile phone coverage might be limited in some areas, so it's best to be cautious.</li>
            <li><strong>Local Amenities:</strong> Check for nearby amenities such as food and water sources. Since Hillock (Mooppenkunnu) is a natural site, facilities may be limited.</li>
        </ul>
    </div>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Mahe Beach</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Parassinikkadavu Snake Park</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Riverside Promenade</a>
                <a href="#section3" onClick={() => setActiveSection('section4')}>Hillock (Mooppenkunnu)</a>

            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
