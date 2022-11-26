import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className="cart-detail">
                <p>Selected Items: {quantity
                } </p>
                <p>Total price: $ {total}</p>
                <p>Total Shopping Charge: ${shipping}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>
                <h2>Grand Total: $ {grandTotal.toFixed(2)}</h2>
                <button className='order-btn'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon
                        icon={faTrash}></FontAwesomeIcon>
                </button>

                {props.children}
            </div>

        </div>
    );
};

export default Cart;