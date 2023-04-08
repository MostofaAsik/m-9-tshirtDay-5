import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, picture, price, gender, index } = tShirt
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tShirt)} className='buy-btn'>Buy Now</button>

        </div>
    );
};

export default TShirt;