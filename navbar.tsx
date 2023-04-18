import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/bootstrap.css'
import './navbar.css'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm fixed-top d-flex justify-content-around">      
          <a className="navbar-brand" href="#"><span>BIO</span> Madagascar</a>
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
            <Link className="nav-link text-light" to="#">English</Link>
          </li>
        </ul>
      </nav>
    );
} 