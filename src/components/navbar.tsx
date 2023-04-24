import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/bootstrap.css'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa' ;

export const Navbar = () => {
    const navRef = useRef() ;
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav") ; 
    }
    return (
    <header>
      <div id ="top" className="navbar navbar-expand-sm  fixed-top d-flex justify-content-between align-items-center">        
        <a className="navbar-brand" href="#"><span>BIO</span> Madagascar</a>  
        <nav ref={navRef} className="d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Market">Market</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/User">Account</Link>
            </li>
            <li className="nav-item d-flex justify-content-around" id='user'> 
              <Link className="nav-link" to="#">English</Link>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn " onClick={showNavbar}>
            <FaBars />
        </button>
      </div>
    </header>     
    );
} 