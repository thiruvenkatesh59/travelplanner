import React from 'react';
import '../style.css'
import vid1 from '../accert/OCEN.mp4';

const Banner = () => (
  <section className="banner" id="banner">
    <video autoPlay loop muted className="bg-video">
      <source src={vid1} type="video/mp4" />
    </video>
    <div className="navbar">
      <div className="logo">
        <h3 style={{ fontStyle: 'italic', fontSize: '25px', color: 'white' }}>Travel-planner</h3>
      </div>
    
    </div>
    <div className="content">
      <h1>EXPLORE THE WORLD</h1>
      <h4>Let's Choose Your Favorite Destination</h4>
    </div>
  </section>
);

export default Banner;