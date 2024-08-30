import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/Bestpackage">Best-Package</Link></li>
            <li><Link to="/booking">Booking</Link></li> 
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <Link to="/Kanya"></Link>        
            <Link to="/Delhi"></Link>
            <Link to="/Mahabalipuram"></Link>
            <Link to="/valparai"></Link>
            <Link to="/ooty"></Link>
            <Link to="/rameswaram"></Link>
            <Link to="/madurai"></Link>
           <Link to="/puducherry"></Link>
            <Link to="/mudumalai"></Link>
            <Link to="/nilgiris"></Link>
            <Link to="/coimbatore"></Link>
            <Link to="/coimbatore"></Link>
            <Link to="/coimbatore"></Link>
            <Link to="/coimbatore"></Link>
            <Link to="/coimbatore"></Link>



          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;