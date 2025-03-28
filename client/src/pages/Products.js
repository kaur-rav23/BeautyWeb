import React, { useState } from "react";
import data from "../utils/mockData";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Products.css";

const Products = () => {
    // Get unique product types
    const [search, setSearch] = useState('');
    const uniqueProductTypes = [...new Set(data.map((item) => item.product_type))];

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
                    <li className="active"><Link to="/" style={{ color: "black", textDecoration: "none" }}>All Categories</Link></li>
                    <li><Link to="/brand" style={{ color: "black", textDecoration: "none" }}>Brand ▼</Link></li>
                    <li><Link to="/products" style={{ color: "black", textDecoration: "none" }}>Product ▼</Link></li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Discount</li>
                    <li>New Arrival</li>
                </ul>
            </nav>
            <div className="search-bar-div">
                <div className="search-bar">
                    <input type="search" placeholder="Search for products and brands"
                        aria-label="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <button>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div className="main-container">
                {uniqueProductTypes.map((type) => {
                    const filteredProducts = data.filter((product) =>
                        product.product_type === type &&
                        (!search || product.name.toLowerCase().includes(search.toLowerCase()))
                    );


                    return (
                        <div key={type} className="category-section">
                            <h2 className="category-title">{type}</h2>
                            <hr />
                            <div className="product-list">
                                {filteredProducts.map((product) => (
                                    <Card key={product.id} item={product} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
