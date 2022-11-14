import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { product, handlerAddToCart
    } = props;
    const { id, img, name, price, ratings, seller } = product;
    return (
        <div className="product">
            <img src={img} alt="product img" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p>Price: $ {price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => handlerAddToCart(product)
            } className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;