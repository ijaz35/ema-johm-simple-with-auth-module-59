import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, handleAddToDeleteBtn } = props;
    const { id, img, name, price, quantity, shipping
    } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-detail-container">
                <div className="review-item-detail">
                    <h3 className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </h3>
                    <p>Price: ${price}</p>
                    <p>Shipping charge: ${shipping}</p>
                    <p>Quantity: {quantity}</p>

                </div>
                <div className="delete-container">
                    <button onClick={() => handleAddToDeleteBtn(product)} className="delete-button">
                        <FontAwesomeIcon className="icon" icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;