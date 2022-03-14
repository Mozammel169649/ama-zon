import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    // const product_price=cart.reduce((total,prd) => total + prd.price,0);
    let product_price=0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        product_price=product_price+prd.price; 
    }

    let shipping = 0;
    if (product_price > 35) {
        shipping = 0;
    }
    else if(product_price > 15){
        shipping = 4.99;
    }
    else if(product_price > 0){
        shipping = 12.99;
    }
   
    const tax = product_price / 10;

    const total = shipping + product_price + tax;

    const formatNmber = num => num.toFixed(2);
    
    return (
        <div className='price-data' >
            <h2>Order Summary</h2>
            <h4>Item Order: {cart.length}</h4>
            <p>Prodct Price : ${formatNmber(product_price)}</p>
            <p><small>Shipping Price: ${formatNmber(shipping)}</small></p>
            <p><small>Tax+Vat : ${formatNmber(tax)} </small></p>
            <h3>Order Total : ${formatNmber(total)}</h3>
            <button> <FontAwesomeIcon icon={faShoppingCart}/> add cart view </button>
            

        </div>
    );
};

export default Cart;