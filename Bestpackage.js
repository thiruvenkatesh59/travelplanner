import React from 'react';
import './BestPackage.css';
import { Link } from 'react-router-dom';
import image1 from '../accert/delhi.jpeg';
import image3 from '../accert/bangkok.jpeg';
import image4 from '../accert/netherlands.jpeg';
import image5 from '../accert/hong kong.jpeg';
import dmen from '../accert/delhimen.jpeg';
import dmen1 from '../accert/delhimen1.jpeg';
import dwomen from '../accert/delhiwomen.jpeg';
const Package = () => (
  <section className="package" id="package">
    <div className="pack">
      <div className="g">
        <div className="d">
          <div className="items">
            <img src={image1} alt="valparai" width="100px" height="100px" />
            <h4>Delhi</h4>
            <details>   <summary>  More details</summary> <div className="tourist-package">
              <header className="header">
                <h1>Delhi Tourist Package</h1>
              </header>

              <section className="package-details">
                <h2>Duration: 5 Days / 4 Nights</h2>

                <div className="itinerary">
                  <h3>Day 1: Arrival and Relaxation</h3>
                  <div className="accommodation">
                    <h4>Accommodation:</h4>
                    <p><strong>Hotel:</strong> The Park Delhi</p>
                    <p><strong>Room Type:</strong> Deluxe Room</p>
                    <p><strong>Address:</strong> 15 Parliament Street, Connaught Place, New Delhi</p>
                    <p><strong>Facilities:</strong> Free Wi-Fi, air conditioning, in-room safe, TV, minibar, restaurant, and spa.</p>
                  </div>

                  <div className="meals">
                    <h4>Meals:</h4>
                    <ul>
                      <li>Breakfast: At the hotel</li>
                      <li>Lunch: At the hotel or a local restaurant</li>
                      <li>Dinner: At the hotel or a recommended local restaurant</li>
                    </ul>
                  </div>

                  <div className="transport">
                    <h4>Transport:</h4>
                    <p>Pickup from the airport or railway station and transfer to the hotel.</p>
                  </div>

                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      <li>Arrival and check-in</li>
                      <li>Relaxation at the hotel</li>
                    </ul>
                  </div>
                </div>

                <div className="itinerary">
                  <h3>Day 2: Historical and Cultural Exploration</h3>
                  <div className="accommodation">
                    <h4>Accommodation:</h4>
                    <p><strong>Hotel:</strong> The Park Delhi (same as Day 1)</p>
                  </div>

                  <div className="meals">
                    <h4>Meals:</h4>
                    <ul>
                      <li>Breakfast: At the hotel</li>
                      <li>Lunch: Local cuisine at a recommended restaurant (e.g., Indian Accent)</li>
                      <li>Dinner: At the hotel or a local restaurant</li>
                    </ul>
                  </div>

                  <div className="transport">
                    <h4>Transport:</h4>
                    <p>Private vehicle with driver for the day.</p>
                  </div>

                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      <li>Red Fort – Explore the historic fort and its museums.</li>
                      <li>Jama Masjid – Visit one of the largest mosques in India.</li>
                      <li>Raj Ghat – Pay respects at Mahatma Gandhi’s memorial.</li>
                      <li>India Gate – A war memorial and a popular tourist spot.</li>
                      <li>Humayun’s Tomb – A UNESCO World Heritage Site.</li>
                    </ul>
                  </div>
                </div>

                <div className="itinerary">
                  <h3>Day 3: Monuments and Markets</h3>
                  <div className="accommodation">
                    <h4>Accommodation:</h4>
                    <p><strong>Hotel:</strong> The Park Delhi (same as previous days)</p>
                  </div>

                  <div className="meals">
                    <h4>Meals:</h4>
                    <ul>
                      <li>Breakfast: At the hotel</li>
                      <li>Lunch: At a local restaurant (e.g., Bukhara)</li>
                      <li>Dinner: At the hotel or a local restaurant</li>
                    </ul>
                  </div>

                  <div className="transport">
                    <h4>Transport:</h4>
                    <p>Private vehicle with driver for the day.</p>
                  </div>

                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      <li>Qutub Minar – Visit the tallest brick minaret in the world.</li>
                      <li>Lotus Temple – Explore this unique lotus-shaped Bahá'í House of Worship.</li>
                      <li>Chandni Chowk – Experience the bustling markets and street food.</li>
                      <li>Dilli Haat – Enjoy traditional crafts and food from various states of India.</li>
                      <li>Rashtrapati Bhavan – View the President’s residence and its grand architecture (external visit).</li>
                    </ul>
                  </div>
                </div>

                <div className="itinerary">
                  <h3>Day 4: Leisure and Optional Activities</h3>
                  <div className="accommodation">
                    <h4>Accommodation:</h4>
                    <p><strong>Hotel:</strong> The Park Delhi (same as previous days)</p>
                  </div>

                  <div className="meals">
                    <h4>Meals:</h4>
                    <ul>
                      <li>Breakfast: At the hotel</li>
                      <li>Lunch: At a local restaurant or hotel</li>
                      <li>Dinner: At the hotel or a local restaurant</li>
                    </ul>
                  </div>

                  <div className="transport">
                    <h4>Transport:</h4>
                    <p>Private vehicle with driver for the day.</p>
                  </div>

                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      <li>Morning: Leisure time for shopping or relaxation.</li>
                      <li>Optional Activities:
                        <ul>
                          <li>National Museum – Explore India's rich history and culture.</li>
                          <li>Akshardham Temple – Visit this stunning temple complex with exhibitions and gardens.</li>
                        </ul>
                      </li>
                      <li>Evening: Optional visit to a local cultural show or explore Delhi’s nightlife.</li>
                    </ul>
                  </div>
                </div>

                <div className="itinerary">
                  <h3>Day 5: Departure</h3>
                  <div className="accommodation">
                    <h4>Accommodation:</h4>
                    <p><strong>Hotel:</strong> The Park Delhi (check-out)</p>
                  </div>

                  <div className="meals">
                    <h4>Meals:</h4>
                    <ul>
                      <li>Breakfast: At the hotel</li>
                      <li>Lunch: Packed meal or restaurant (depending on departure time)</li>
                    </ul>
                  </div>

                  <div className="transport">
                    <h4>Transport:</h4>
                    <p>Transfer to the airport or railway station for departure.</p>
                  </div>

                  <div className="activities">
                    <h4>Activities:</h4>
                    <ul>
                      <li>Morning: Leisurely breakfast and last-minute shopping or exploration.</li>
                      <li>Transfer: Check-out and transfer to the airport or railway station.</li>
                    </ul>
                  </div>
                </div>

                <div className="additional-info">
                  <h3>Additional Information:</h3>
                  <ul>
                    <li><strong>Travel Planner Contact:</strong> [Your Travel Agent's Contact Information]</li>
                    <li><strong>Emergency Contact:</strong> [Local Contact Number]</li>
                    <li><strong>Local Guide:</strong> Available for tours; fluent in English and knowledgeable about Delhi’s history and culture</li>
                    <li><strong>Travel Insurance:</strong> Included in the package</li>
                  </ul>
                  <p><strong>Note:</strong> The package can be customized based on preferences, including different hotels, additional days, or specific dietary needs.</p>
                </div>

              </section>


            </div>    </details>
            <details><summary>feedback</summary><div class="card"> <div class="card__image-container"> <img src={dmen1} alt="valparai" width="100px" height="100px" />
            </div>
              <div class="card__content">
                <span><i class="ri-double-quotes-l"></i></span>
                <div class="card__details">
                  <p>
                    <strong> Taste and Quality:</strong> Check if the food is fresh and well-prepared. For packaged food, ensure the ingredients are high-quality and the flavors are balanced.
                    <br></br>
                    <strong>Variety: </strong>A good food package or restaurant should offer a range of options to cater to different tastes and dietary preferences.
                  </p>
                  <h4>- Marnus Stephen</h4>
                </div>
              </div>
            </div>
              <div class="card">
                <div class="card__image-container">
                  <div class="card__image-container"> <img src={dmen} alt="user" />
                  </div>
                </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      <strong>Overall Experience Comfort and Safety:</strong>
                      Evaluate how well the shelter provides a safe and comfortable environment. Are there adequate facilities and cleanliness<br></br>
                      Support Services: Check if there are additional support services provided, such as medical care, counseling, or job placement assistance.

                    </p>
                    <h4>- Andrew Jettpace</h4>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image-container"> <img src={dwomen} alt="valparai" width="100px" height="100px" />

                </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      I absolutely loved working with the Filament team. Complete
                      experts at what they do!
                    </p>
                    <h4>- Stacy Stone</h4>
                  </div>
                </div>
              </div>
            </details>
            <h3>price:25,999/-</h3>


            <center><Link to="/booking">
              <button>book now</button>
            </Link>
            </center>
          </div>
        </div>

        <div className="d">
          <div className="items">
            <img src={image3} alt="bangkok" width="100px" height="100px" />
            <h4>bangkok</h4>



            <div className="travel-package">
              <details>   <summary>  More details</summary>
                <h1>Bangkok Travel Package (5-10 Days)</h1>

                <section className="section">
                  <h2>Accommodation Options</h2>
                  <ul>
                    <li><strong>Luxury:</strong> The Peninsula Bangkok, Mandarin Oriental</li>
                    <li><strong>Mid-Range:</strong> Chatrium Hotel Riverside Bangkok, Eastin Grand Hotel Sathorn</li>
                    <li><strong>Budget:</strong> Ibis Bangkok Riverside, Khaosan Palace Hotel</li>
                  </ul>
                </section>

                <section className="section">
                  <h2>Day-by-Day Itinerary</h2>

                  <div className="day">
                    <h3>Day 1: Arrival and Relaxation</h3>
                    <ul>
                      <li>Airport Transfer: Private pick-up from Suvarnabhumi or Don Mueang Airport.</li>
                      <li>Accommodation Check-In: Relax at your hotel.</li>
                      <li>Evening Activity: Welcome Dinner and Stroll around Khao San Road.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 2: Historic Bangkok</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Grand Palace and Wat Phra Kaew.</li>
                      <li>Lunch: Local Thai restaurant.</li>
                      <li>Afternoon Activity: Wat Pho and Wat Arun.</li>
                      <li>Dinner: At Bo.lan.</li>
                      <li>Evening Activity: Chao Phraya River Cruise.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 3: Markets and Shopping</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Chatuchak Weekend Market or Pratunam Market.</li>
                      <li>Lunch: Street food or market food.</li>
                      <li>Afternoon Activity: Siam Paragon, MBK Center, and Sea Life Bangkok Ocean World.</li>
                      <li>Dinner: At Asiatique The Riverfront.</li>
                      <li>Evening Activity: Asiatique’s Ferris Wheel.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 4: Cultural and Art Exploration</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Jim Thompson House.</li>
                      <li>Lunch: Nearby café or restaurant.</li>
                      <li>Afternoon Activity: Bangkok Art and Culture Center, Bangkok National Museum.</li>
                      <li>Dinner: At Nahm.</li>
                      <li>Evening Activity: Rooftop Bar Experience.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 5: Floating Markets and Riverside</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Damnoen Saduak Floating Market.</li>
                      <li>Lunch: Floating market food.</li>
                      <li>Afternoon Activity: Amphawa Floating Market or explore riverside.</li>
                      <li>Dinner: Return to Bangkok; dine at a local restaurant.</li>
                      <li>Evening Activity: Relaxing evening or visit Lumpini Park.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 6: Nature and Adventure</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Erawan National Park.</li>
                      <li>Lunch: Picnic or local food near the park.</li>
                      <li>Afternoon Activity: Continue exploring nature trails.</li>
                      <li>Dinner: Return to Bangkok; dinner at a restaurant of your choice.</li>
                      <li>Evening Activity: Optional Muay Thai Boxing Match or Spa Evening.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 7: Historical Ayutthaya</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Day Trip to Ayutthaya.</li>
                      <li>Lunch: Local restaurant in Ayutthaya.</li>
                      <li>Afternoon Activity: Continue exploring the ancient city.</li>
                      <li>Dinner: Return to Bangkok; dine at a local restaurant.</li>
                      <li>Evening Activity: Relax at your hotel or explore local nightlife.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 8: Leisure and Optional Activities</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Day Activity Options: Cooking Class, Biking Tour, Day Trip to Nakhon Pathom.</li>
                      <li>Lunch: Based on chosen activity.</li>
                      <li>Dinner: Explore dining options or revisit favorite spots.</li>
                      <li>Evening Activity: Karaoke Night or Traditional Thai Dance Performance.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 9: Additional Excursions (Optional)</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Day Activity Options: Ayutthaya Historical Park, Khao Yai National Park, Khlong Lat Mayom Floating Market.</li>
                      <li>Lunch: Based on chosen activity.</li>
                      <li>Dinner: Farewell dinner at a special restaurant.</li>
                    </ul>
                  </div>

                  <div className="day">
                    <h3>Day 10: Departure</h3>
                    <ul>
                      <li>Breakfast: At the hotel.</li>
                      <li>Morning Activity: Last-minute shopping or relaxation.</li>
                      <li>Airport Transfer: Private drop-off at the airport for your departure.</li>
                    </ul>
                  </div>
                </section>

                <section className="section">
                  <h2>Inclusions</h2>
                  <ul>
                    <li>Accommodation: 5-10 nights in selected hotel with breakfast.</li>
                    <li>Transport: Private airport transfers, in-city transport, day trip transport.</li>
                    <li>Food: Breakfast daily, selected lunches and dinners.</li>
                    <li>Activities: Guided tours, entrance fees, various activities.</li>
                    <li>Travel Insurance: Optional but recommended.</li>
                  </ul>
                </section>

                <section className="section">
                  <h2>Exclusions</h2>
                  <ul>
                    <li>International flights.</li>
                    <li>Personal expenses.</li>
                    <li>Additional activities not specified in the itinerary.</li>
                  </ul>
                </section>

                <section className="section">
                  <h2>Estimated Price Range</h2>
                  <ul>
                    <li>Luxury: ₹3,500 - ₹5,500 per person</li>
                    <li>Mid-Range: ₹2,500 - ₹4,000 per person</li>
                    <li>Budget: ₹1,500 - ₹2,500 per person</li>
                  </ul>
                </section>
              </details>
              <details><summary>feedback</summary><div class="card"> <div class="card__image-container"> <img src={dwomen} alt="valparai" width="100px" height="100px" />
              </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      <strong>Overall Experience Comfort and Safety:</strong>
                      Evaluate how well the shelter provides a safe and comfortable environment. Are there adequate facilities and cleanliness<br></br>
                      Support Services: Check if there are additional support services provided, such as medical care, counseling, or job placement assistance.

                    </p>
                    <h4>- Marnus Stephen</h4>
                  </div>
                </div>
              </div>
                <div class="card">
                  <div class="card__image-container">
                    <div class="card__image-container"> <img src={dmen1} alt="valparai" width="100px" height="100px" />
                    </div>  </div>
                  <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                      <p>
                        <strong> Taste and Quality:</strong> Check if the food is fresh and well-prepared. For packaged food, ensure the ingredients are high-quality and the flavors are balanced.
                        <br></br>
                        <strong>Variety: </strong>A good food package or restaurant should offer a range of options to cater to different tastes and dietary preferences.

                      </p>
                      <h4>- Andrew Jettpace</h4>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__image-container"> <img src={dmen} alt="valparai" width="100px" height="100px" />

                  </div>
                  <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                      <p>
                        I absolutely loved working with the Filament team. Complete
                        experts at what they do!
                      </p>
                      <h4>- Stacy Stone</h4>
                    </div>
                  </div>
                </div>
              </details>
              <h3>price:59,999/-</h3>
            </div>

            <center><Link to="/booking">
              <button>book now</button>
            </Link></center>
          </div>
        </div>
        <div className="d">
          <div className="items">
            <img src={image5} alt="Coimbatore" width="100px" height="100px" />
            <h4>hong kong</h4>
            <center>
              <details><summary>More-details</summary>
                <header>
                  <h1>10-15 Day Hong Kong Travel Package</h1>
                </header>
                <section className='hong'>
                  <section>
                    <h2>Accommodation</h2>
                    <h3>Luxury Options:</h3>
                    <div class="highlight">
                      <h4>The Peninsula Hong Kong</h4>
                      <p><strong>Location:</strong> Tsim Sha Tsui</p>
                      <p><strong>Features:</strong> Historic hotel, luxury rooms, spa, fine dining (Gaddi’s, Felix)</p>
                      <p><strong>Price Range:</strong> $500-$800 per night</p>
                    </div>
                    <div class="highlight">
                      <h4>The Ritz-Carlton, Hong Kong</h4>
                      <p><strong>Location:</strong> West Kowloon</p>
                      <p><strong>Features:</strong> High-rise views, luxurious rooms, rooftop bar, indoor pool</p>
                      <p><strong>Price Range:</strong> $600-$900 per night</p>
                    </div>
                    <h3>Mid-Range Options:</h3>
                    <div class="highlight">
                      <h4>Hotel ICON</h4>
                      <p><strong>Location:</strong> Tsim Sha Tsui East</p>
                      <p><strong>Features:</strong> Modern design, rooftop pool, free mini-bar, great views</p>
                      <p><strong>Price Range:</strong> $150-$250 per night</p>
                    </div>
                    <div class="highlight">
                      <h4>The Park Lane Hong Kong</h4>
                      <p><strong>Location:</strong> Causeway Bay</p>
                      <p><strong>Features:</strong> Stylish rooms, excellent location for shopping, rooftop bar</p>
                      <p><strong>Price Range:</strong> $150-$250 per night</p>
                    </div>
                    <h3>Budget Options:</h3>
                    <div class="highlight">
                      <h4>YHA Mei Ho House</h4>
                      <p><strong>Location:</strong> Sham Shui Po</p>
                      <p><strong>Features:</strong> Historical building, clean and basic rooms, cultural exhibits</p>
                      <p><strong>Price Range:</strong> $30-$60 per night</p>
                    </div>
                    <div class="highlight">
                      <h4>The Salvation Army Booth Lodge</h4>
                      <p><strong>Location:</strong> Jordan</p>
                      <p><strong>Features:</strong> Simple rooms, basic amenities, good location</p>
                      <p><strong>Price Range:</strong> $50-$80 per night</p>
                    </div>
                  </section>

                  <section>
                    <h2>Food</h2>
                    <h3>Fine Dining:</h3>
                    <div class="highlight">
                      <h4>Tim Ho Wan</h4>
                      <p><strong>Location:</strong> Various branches including Mong Kok</p>
                      <p><strong>Specialty:</strong> Dim sum, known for being Michelin-starred yet affordable</p>
                      <p><strong>Average Cost:</strong> $20-$30 per person</p>
                    </div>
                    <div class="highlight">
                      <h4>Amber (The Landmark Mandarin Oriental)</h4>
                      <p><strong>Location:</strong> Central</p>
                      <p><strong>Specialty:</strong> Innovative French cuisine, fine dining experience</p>
                      <p><strong>Average Cost:</strong> $150-$250 per person</p>
                    </div>
                    <h3>Local Cuisine:</h3>
                    <div class="highlight">
                      <h4>Street Food</h4>
                      <p><strong>Location:</strong> Mong Kok</p>
                      <p><strong>Specialties:</strong> Egg waffles, curry fish balls, and siu mai (pork dumplings)</p>
                      <p><strong>Average Cost:</strong> $5-$10 per item</p>
                    </div>
                    <div class="highlight">
                      <h4>Mak's Noodle</h4>
                      <p><strong>Location:</strong> Central and Jordan</p>
                      <p><strong>Specialty:</strong> Wonton noodles</p>
                      <p><strong>Average Cost:</strong> $10-$15 per bowl</p>
                    </div>
                    <h3>International Options:</h3>
                    <div class="highlight">
                      <h4>Causeway Bay</h4>
                      <p><strong>Restaurants:</strong> Numerous international dining options from Italian (Carpaccio) to Japanese (Sushi Kuu)</p>
                      <p><strong>Average Cost:</strong> $20-$50 per person</p>
                    </div>
                  </section>

                  <section>
                    <h2>Tourist Places</h2>
                    <div class="highlight">
                      <h4>Victoria Peak</h4>
                      <p><strong>How to Get There:</strong> Peak Tram from Central</p>
                      <p><strong>Activities:</strong> Observation deck, Sky100, Peak Galleria shopping</p>
                      <p><strong>Cost:</strong> Tram ticket ~$12 round trip</p>
                    </div>
                    <div class="highlight">
                      <h4>Hong Kong Disneyland</h4>
                      <p><strong>Location:</strong> Penny’s Bay, Lantau Island</p>
                      <p><strong>Activities:</strong> Various themed lands, rides, and parades</p>
                      <p><strong>Cost:</strong> ~$80-$100 per day pass</p>
                    </div>
                    <div class="highlight">
                      <h4>Ocean Park</h4>
                      <p><strong>Location:</strong> Aberdeen</p>
                      <p><strong>Activities:</strong> Marine life exhibits, amusement rides, and shows</p>
                      <p><strong>Cost:</strong> ~$60-$80 per day pass</p>
                    </div>
                    <div class="highlight">
                      <h4>Tsim Sha Tsui Promenade</h4>
                      <p><strong>Activities:</strong> Walk along the waterfront, Symphony of Lights show at 8 PM</p>
                      <p><strong>Cost:</strong> Free</p>
                    </div>
                    <div class="highlight">
                      <h4>Lantau Island</h4>
                      <p><strong>Attractions:</strong> Big Buddha, Po Lin Monastery, Ngong Ping 360 cable car</p>
                      <p><strong>Cost:</strong> ~$25 for cable car round trip</p>
                    </div>
                    <div class="highlight">
                      <h4>Mong Kok</h4>
                      <p><strong>Markets:</strong> Ladies' Market, Sneakers Street</p>
                      <p><strong>Cost:</strong> Free to browse, shopping varies</p>
                    </div>
                    <div class="highlight">
                      <h4>Tai O Fishing Village</h4>
                      <p><strong>Activities:</strong> Traditional stilt houses, boat tours, local seafood</p>
                      <p><strong>Cost:</strong> Boat tours ~$10-$20</p>
                    </div>
                    <div class="highlight">
                      <h4>Hong Kong Museum of History</h4>
                      <p><strong>Location:</strong> Tsim Sha Tsui</p>
                      <p><strong>Activities:</strong> Exhibits on Hong Kong’s past</p>
                      <p><strong>Cost:</strong> Free</p>
                    </div>
                    <div class="highlight">
                      <h4>Hong Kong Science Museum</h4>
                      <p><strong>Location:</strong> Tsim Sha Tsui</p>
                      <p><strong>Activities:</strong> Interactive science exhibits</p>
                      <p><strong>Cost:</strong> ~$10</p>
                    </div>
                    <div class="highlight">
                      <h4>Cheung Chau Island</h4>
                      <p><strong>Activities:</strong> Bicycle rental, local seafood, hiking trails</p>
                      <p><strong>Cost:</strong> Ferry ~$10, bike rental ~$5-$10</p>
                    </div>
                  </section>

                  <section>
                    <h2>Travel Modes</h2>
                    <div class="highlight">
                      <h4>Airport Transfers</h4>
                      <p><strong>Airport Express Train:</strong> Fast and efficient, approximately 24 minutes from the airport to Central</p>
                      <p><strong>Private Transfer:</strong> Pre-booked airport pickup, more comfortable but costlier</p>
                    </div>
                    <div class="highlight">
                      <h4>Public Transport</h4>
                      <p><strong>MTR (Mass Transit Railway):</strong> Comprehensive network, use Octopus Card for convenience</p>
                      <p><strong>Buses and Trams:</strong> Useful for exploring neighborhoods, affordable</p>
                      <p><strong>Star Ferry:</strong> Scenic ride across Victoria Harbour, $0.30-$0.60 per trip</p>
                    </div>
                    <div class="highlight">
                      <h4>Taxi</h4>
                      <p><strong>Availability:</strong> Readily available, especially in urban areas</p>
                      <p><strong>Cost:</strong> Start at around $3.50 with additional charges based on distance</p>
                    </div>
                  </section>

                  <section>
                    <h2>Sample Itinerary</h2>
                    <div class="highlight">
                      <h4>Day 1-2: Arrival and Central Hong Kong</h4>
                      <p><strong>Day 1:</strong> Arrive, check-in, explore Central, visit the Peak Tram, dinner at Tim Ho Wan.</p>
                      <p><strong>Day 2:</strong> Visit Hong Kong Park, stroll through Admiralty, evening walk at Tsim Sha Tsui Promenade.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 3-4: Kowloon</h4>
                      <p><strong>Day 3:</strong> Explore Mong Kok markets, visit the Wong Tai Sin Temple, dinner at Mak's Noodle.</p>
                      <p><strong>Day 4:</strong> Day trip to Lantau Island, visit Big Buddha and Po Lin Monastery, return to Central.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 5: Hong Kong Disneyland</h4>
                      <p><strong>Activities:</strong> Full day at the park, enjoy rides and shows.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 6: Ocean Park</h4>
                      <p><strong>Activities:</strong> Explore marine exhibits, enjoy amusement rides.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 7: Cultural and Historical Sites</h4>
                      <p><strong>Activities:</strong> Visit Hong Kong Museum of History and Science Museum, explore local neighborhoods.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 8: Tai O Fishing Village</h4>
                      <p><strong>Activities:</strong> Boat tour, explore stilt houses, try local seafood.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 9: Free Day</h4>
                      <p><strong>Activities:</strong> Relax or explore areas you missed.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 10: Cheung Chau Island</h4>
                      <p><strong>Activities:</strong> Bicycle rental, explore island, enjoy local cuisine.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 11-12: Shopping and Leisure</h4>
                      <p><strong>Day 11:</strong> Shopping in Causeway Bay, relax at local cafes.</p>
                      <p><strong>Day 12:</strong> Explore the Art Museum or visit local markets.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 13-14: Relax and Revisit Favorites</h4>
                      <p><strong>Activities:</strong> Revisit favorite spots, explore any remaining attractions, relax before departure.</p>
                    </div>
                    <div class="highlight">
                      <h4>Day 15: Departure</h4>
                      <p><strong>Activities:</strong> Last-minute shopping or sightseeing, transfer to airport.</p>
                    </div>
                  </section>
                </section>
              </details>

              <details><summary>feedback</summary><div class="card">
                <div class="card__image-container"> <img src={dmen1} alt="valparai" width="100px" height="100px" />
                </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      <strong> Taste and Quality:</strong> Check if the food is fresh and well-prepared. For packaged food, ensure the ingredients are high-quality and the flavors are balanced.
                      <br></br>
                      <strong>Variety: </strong>A good food package or restaurant should offer a range of options to cater to different tastes and dietary preferences.
                    </p>
                    <h4>- Marnus Stephen</h4>
                  </div>
                </div>
              </div>
                <div class="card">
                  <div class="card__image-container">
                    <div class="card__image-container"> <img src={dmen} alt="valparai" width="100px" height="100px" />
                    </div>  </div>
                  <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                      <p>
                        <strong>Overall Experience Comfort and Safety:</strong>
                        Evaluate how well the shelter provides a safe and comfortable environment. Are there adequate facilities and cleanliness<br></br>
                        Support Services: Check if there are additional support services provided, such as medical care, counseling, or job placement assistance.

                      </p>
                      <h4>- Andrew Jettpace</h4>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card__image-container"> <img src={dwomen} alt="valparai" width="100px" height="100px" />

                  </div>
                  <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                      <p>
                        I absolutely loved working with the Filament team. Complete
                        experts at what they do!
                      </p>
                      <h4>- Stacy Stone</h4>
                    </div>
                  </div>
                </div>
              </details>
              <h3>price:79,999/-</h3>
              <Link to="/booking">
                <button>book now</button>
              </Link></center>
          </div>
        </div>
        <div className="d">
          <div className="items">
            <img src={image4} alt="netherlands" width="100px" height="100px" />
            <h4>Netherlands</h4>
            <details> <summary>More-details</summary>
              <div class="section travel-package">
                <h1>7-Day Netherlands Travel Package</h1>

                <div class="day">
                  <h3>Day 1: Arrival in Amsterdam</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> 4-star hotel in central Amsterdam</li>
                    <li><strong>Meals:</strong> Dinner at a local Dutch restaurant</li>
                    <li><strong>Activity:</strong> Evening canal cruise</li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 2: Amsterdam Exploration</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> Same 4-star hotel</li>
                    <li><strong>Meals:</strong> Breakfast at the hotel, lunch at a local café, dinner at a traditional Dutch eatery</li>
                    <li><strong>Activities:</strong>
                      <ul>
                        <li>Visit the Rijksmuseum</li>
                        <li>Explore the Van Gogh Museum</li>
                        <li>Walk around the Jordaan district</li>
                        <li>Visit the Anne Frank House</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 3: Day Trip to Zaanse Schans and Volendam</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> Same 4-star hotel</li>
                    <li><strong>Meals:</strong> Breakfast at the hotel, lunch in Volendam, dinner back in Amsterdam</li>
                    <li><strong>Activities:</strong>
                      <ul>
                        <li>Visit Zaanse Schans to see traditional windmills and wooden houses</li>
                        <li>Explore the fishing village of Volendam</li>
                        <li>Cheese tasting in Edam</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 4: Utrecht and Castle Day</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> 4-star hotel in Utrecht</li>
                    <li><strong>Meals:</strong> Breakfast at the Amsterdam hotel, lunch in Utrecht, dinner at a local restaurant</li>
                    <li><strong>Activities:</strong>
                      <ul>
                        <li>Visit the Dom Tower</li>
                        <li>Explore the Old Town and the canals</li>
                        <li>Visit Kasteel de Haar (De Haar Castle)</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 5: Keukenhof Gardens and Haarlem</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> Return to the Amsterdam hotel</li>
                    <li><strong>Meals:</strong> Breakfast at the hotel, lunch at Keukenhof Gardens, dinner in Haarlem</li>
                    <li><strong>Activities:</strong>
                      <ul>
                        <li>Visit Keukenhof Gardens (if in season, usually open from mid-March to mid-May)</li>
                        <li>Explore Haarlem’s historic center and the Frans Hals Museum</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 6: Rotterdam and Delft</h3>
                  <ul>
                    <li><strong>Accommodation:</strong> 4-star hotel in Rotterdam</li>
                    <li><strong>Meals:</strong> Breakfast at the Amsterdam hotel, lunch in Rotterdam, dinner in Rotterdam</li>
                    <li><strong>Activities:</strong>
                      <ul>
                        <li>Explore Rotterdam’s modern architecture</li>
                        <li>Visit the Markthal and Cube Houses</li>
                        <li>Tour the historic city of Delft and visit the Royal Delft factory</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="day">
                  <h3>Day 7: Departure</h3>
                  <ul>
                    <li><strong>Meals:</strong> Breakfast at the Rotterdam hotel</li>
                    <li><strong>Activity:</strong> Last-minute shopping or sightseeing in Rotterdam before departure</li>
                  </ul>
                </div>
              </div>

              <div class="additional-info">
                <h2>Additional Information</h2>
                <ul>
                  <li><strong>Transportation:</strong> Includes private transfers between cities, train tickets, and local transportation</li>
                  <li><strong>Guided Tours:</strong> English-speaking guides for major attractions and tours</li>
                  <li><strong>Inclusions:</strong> Entrance fees for mentioned attractions, all breakfasts, some lunches and dinners, and accommodation</li>
                </ul>
              </div>
            </details>

            <details><summary>feedback</summary><div class="card">
              <div class="card__image-container"> <img src={dmen} alt="valparai" width="100px" height="100px" />
              </div>
              <div class="card__content">
                <span><i class="ri-double-quotes-l"></i></span>
                <div class="card__details">
                  <p>
                  </p>
                  <h4>- Marnus Stephen</h4>
                </div>
              </div>
            </div>
              <div class="card">
                <div class="card__image-container">
                  <div class="card__image-container"> <img src={dmen1} alt="valparai" width="100px" height="100px" />
                  </div>  </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      <strong> Taste and Quality:</strong> Check if the food is fresh and well-prepared. For packaged food, ensure the ingredients are high-quality and the flavors are balanced.
                      <br></br>
                      <strong>Variety: </strong>A good food package or restaurant should offer a range of options to cater to different tastes and dietary preferences.

                    </p>
                    <h4>- Andrew Jettpace</h4>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card__image-container"> <img src={dwomen} alt="valparai" width="100px" height="100px" />

                </div>
                <div class="card__content">
                  <span><i class="ri-double-quotes-l"></i></span>
                  <div class="card__details">
                    <p>
                      <strong>Overall Experience Comfort and Safety:</strong>
                      Evaluate how well the shelter provides a safe and comfortable environment. Are there adequate facilities and cleanliness<br></br>
                      Support Services: Check if there are additional support services provided, such as medical care, counseling, or job placement assistance.
                    </p>
                    <h4>- Stacy Stone</h4>
                  </div>
                </div>
              </div>
            </details>
            <h3>price:65,999/-</h3>
            <center><Link to="/booking">
              <button>book now</button>
            </Link></center>
          </div>
        </div>




        
      </div>
    </div>
  </section>
);

export default Package;
