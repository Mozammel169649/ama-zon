import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product_cont'>
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_data">
                <h4>{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - Order soon</small></p>
                <button onClick={()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;