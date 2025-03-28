import React from "react";
import "./Categories.css";
import data from '../utils/mockData';
const Categories = () => {
    const uniqueProductTypes = [...new Set(data.map((item) => item.product_type))];
    return (
        <div>
            <div className="heading-div"> <h2 className="categories-heading" style={{"textAlign":"center"}}>Discover Our Categories</h2></div>

            <div className="categories-container">
                {uniqueProductTypes.slice(0, 4).map((category, index) => (
                    <div key={index} className="category-card" style={{ backgroundColor: category.bgColor }}>
                        <div className="category-content">
                            <p className="category-offer">{category.offer}</p>
                            <h3 className="category-name">{category}</h3>
                            <button className="shop-now">Shop Now</button>
                        </div>
                        <img src="https://images.pexels.com/photos/234220/pexels-photo-234220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bg-image" className="category-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
