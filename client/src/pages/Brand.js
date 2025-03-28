import React from "react";
import data from "../utils/mockData";
import { Link } from "react-router-dom";
import './Brand.css';

const Brand = () => {
    // const uniqueBrands = [...new Set(data.map(item => item.brand))]; // Extract unique brands
    const uniqueBrands = Array.from(
        new Map(data.map((item) => [item.brand, item.website_link])).entries()
    );


    return (
        <div>
            <div className="top-nav">
                <p></p>
                <div className="top-right">
                    <span>Help Center</span>
                    <span>🌍 INDIA</span>
                </div>
            </div>
            <nav className="bottom-nav">
                <ul>
                    {/* <li className="active">All Categories</li> */}
                    <li className="active"><Link to="/" style={{ color: "black", textDecoration: "none" }}>All Categories</Link></li>
                    <li><Link to="/brand" style={{ color: "black", textDecoration: "none" }}>Brand ▼</Link></li>
                    <li><Link to="/products" style={{ color: "black", textDecoration: "none" }}>Product ▼</Link></li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Discount</li>
                    <li>New Arrival</li>
                </ul>
            </nav>
            <h1 className="brand-heading">OUR TOP BRANDS</h1>
            <ul className="brands-list">
                {uniqueBrands.map(([brand, website], index) => (
                    <li key={index} className="brand-div">
                        <div className="brand-div-inner">
                            <a href={website} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}>
                                <div className="brand-name">
                                    <h2>{brand}</h2>
                                </div>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Brand;
