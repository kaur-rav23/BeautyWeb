import React from 'react'
import './Card.css'
const Card = (props) => {
    const {brand,name,price,price_sign,image_link,category,product_link}=props.item
    return (
        <div className="card-div">
            <div className="card-div-img"><img src={image_link} alt="product-image"></img></div>
            <div>
                <h3>{brand}</h3>
                <h3>{name}</h3>
                <p>{price_sign} {price}</p>
                <p>{category}</p>
                <a href={product_link} target="_blank" rel="noopener noreferrer">Visit Product Page</a>
                {/* <p>Available Colors: {product_colors?.map(color => color.colour_name).join(', ') || 'N/A'}</p> */}
            </div>
        </div>
    )
}

export default Card
