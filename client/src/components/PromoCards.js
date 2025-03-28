import React from "react";
import "./PromoCards.css";


const PromoCards = () => {
    return (
        <div className="promo-cards-container">
            <div className="promo-card">
                <img src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Radiant Skin" className="promo-card-img" />
                <h3>Get Radiant Skin!</h3>
                <p>Experience the ultimate skincare transformation with our breakthrough formula.</p>
            </div>

            <div className="promo-card">
                <img src="https://plus.unsplash.com/premium_photo-1682965699603-81ccb5965576?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Natural Beauty" className="promo-card-img" />
                <h3>Enhance Your Natural Beauty</h3>
                <p>Unlock your natural glow with our exclusive beauty collection.</p>
                <button className="shop-btn">SHOP NOW</button>
            </div>

            <div className="promo-card">
                <img src="https://images.pexels.com/photos/10541670/pexels-photo-10541670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Trending Makeup" className="promo-card-img" />
                <h3>Discover Trending Makeup</h3>
                <p>Stay ahead with the latest makeup trends and beauty essentials.</p>
            </div>
        </div>
    );
};

export default PromoCards;
