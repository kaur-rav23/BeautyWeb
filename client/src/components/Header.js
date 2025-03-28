import React from "react";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
 
  return (
    <header className="header">
      {/* Top Navbar */}
      <div className="top-nav">
        <p></p>
        <div className="top-right">
          <span>Help Center</span>
          <span>🌍 INDIA</span>
        </div>
      </div>

      <div className="bottom-nav">
        <ul>
          <li className="active">All Categories</li>
          <li><Link to="/brand" style={{ color: "black", textDecoration: "none" }}>Brand ▼</Link></li>
          <li><Link to="/products" style={{ color: "black", textDecoration: "none" }}>Product ▼</Link></li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Discount</li>
          <li>New Arrival</li>
        </ul>


        <div className="user-actions">
          <span><FaUser /> Log in / Sign Up</span>
          <span><FaShoppingBag /> My Bag (0)</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
