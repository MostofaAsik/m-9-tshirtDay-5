import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';





const Home = () => {
    const [cart, setCart] = useState([]);
    const tShirts = useLoaderData();


    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast('You have Alrady selected this item')

        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }


    return (
        <div className='home-container'>
            <div className='tShirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;