import React from 'react';
import mainImage from '../assets/mainImage.png';
import data from '../utils/mockData';
import './Main.css';
import PromoCards from './PromoCards';
import Categories from './Categories';

const Main = () => {
  const uniqueBrands = Array.from(
    new Map(data.map((item) => [item.brand, item.website_link])).entries()
  );
  return (
    <div>

      <div>
        <div className="main-div">
          <div className="main-div-img">
            <img src={mainImage} alt="main-image"></img>
          </div>
        </div>
        <div className="brands-list-div">
          <ul className="brands-list">
            {uniqueBrands.slice(0, 5).map(([brand, website_link], index) => (
              <li key={index}>
                <a href={website_link} target="_blank" rel="noopener noreferrer">
                  {brand}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PromoCards />
      <Categories />
    </div>
  )
}

export default Main;
