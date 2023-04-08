import React from 'react';
import './Cart.css'



const Cart = ({ cart, handleRemoveFromCart }) => {
    let messege;
    if (cart.length === 0) {
        messege = <p>Please Add Some Products(use if else)</p>
    }
    else {
        messege = <div>
            <h3>Love you Vai(use if else)</h3>
            <p>Thanks For Your Support(use if else)</p>
        </div>
    }

    return (
        <div>

            {/* //use ternary by css  */}
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary:{cart.length}</h2>

            {/* use common style by css with ternary  */}
            <p className={`bold blue ${cart.length === 3 ? "red" : "yelow"}`}>Welcome to MAS Shop</p>

            {/* ternary oparator */}
            {
                cart.length > 2
                    ? <span className='orange'>2tar besi kinlei 1ta free</span>
                    : <span>Ekhono to 2tar besi kinoNai</span>
            }
            {messege}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }

            {/* logical and */}
            {
                cart.length === 2 && <span>hmm!! 2ta kina hoyec</span>
            }

            {/* logical or */}
            {
                cart.length === 3 || <h3>3Ta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;