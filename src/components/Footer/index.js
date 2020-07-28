import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
 
 const Footer = (props) =>{
     return(
         <footer className="footer">
             <div className="footer-nav">
             <ul className="footer-navmenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink  to="/post">Posts</NavLink></li>
            <li><NavLink  to="/contact-us">Contact Us</NavLink></li>
        </ul>
             </div>
         </footer>
     );


 }
 export default Footer;