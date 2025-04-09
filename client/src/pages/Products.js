import React, { useState } from "react";
import data from "../utils/mockData";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Products.css";

const Products = () => {
    const [search, setSearch] = useState('');
    const [selectedRange, setSelectedRange] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const uniqueProductTypes = [...new Set(data.map((item) => item.product_type))];

    const priceRanges = [
        { label: 'All Prices', value: '' },
        { label: 'Under $25', value: '0-25' },
        { label: '$25 - $50', value: '25-50' },
        { label: '$50 - $100', value: '50-100' },
        { label: 'Above $100', value: '100+' },
    ];

    const categoryOptions = [
        '', 'LIPSTICK', 'FOUNDATION', 'EYELINER', 'EYESHADOW',
        'BLUSH', 'BRONZER', 'MASCARA', 'EYEBROW', 'LIP_LINER'
    ];

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
                    <li className="active">
                        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                            All Categories
                        </Link>
                    </li>
                    <li>
                        <Link to="/brand" style={{ color: "black", textDecoration: "none" }}>
                            Brand ▼
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" style={{ color: "black", textDecoration: "none" }}>
                            Product ▼
                        </Link>
                    </li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Discount</li>
                    <li>New Arrival</li>
                </ul>
            </nav>

            <div className="search-bar-div">
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search for products and brands"
                        aria-label="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className="main-wrapper">
                {/* Sidebar Filter */}
                <aside className="sidebar">
                    <h3>Filter by Price</h3>
                    <select
                        value={selectedRange}
                        onChange={(e) => setSelectedRange(e.target.value)}
                        className="price-dropdown"
                    >
                        {priceRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>

                    <h3 style={{ marginTop: "20px" }}>Filter by Category</h3>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="price-dropdown"
                    >
                        <option value="">All Categories</option>
                        {categoryOptions.slice(1).map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </aside>

                {/* Main Product Content */}
                <div className="main-container">
                    {uniqueProductTypes.map((type) => {
                        const filteredProducts = data.filter((product) => {
                            const matchesType = product.product_type === type;
                            const matchesSearch = !search || product.name.toLowerCase().includes(search.toLowerCase());

                            let matchesPrice = true;
                            if (selectedRange === '0-25') matchesPrice = product.price < 25;
                            else if (selectedRange === '25-50') matchesPrice = product.price >= 25 && product.price <= 50;
                            else if (selectedRange === '50-100') matchesPrice = product.price >= 50 && product.price <= 100;
                            else if (selectedRange === '100+') matchesPrice = product.price > 100;

                            const matchesCategory = !selectedCategory || product.product_type.toUpperCase() === selectedCategory;

                            return matchesType && matchesSearch && matchesPrice && matchesCategory;
                        });

                        if (filteredProducts.length === 0) return null;

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
        </div>
    );
};

export default Products;
