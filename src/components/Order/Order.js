import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/db';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleAddToDeleteBtn = (deleteProduct) => {
        const restProducts = cart.filter(product => product.id !== deleteProduct.id);
        setCart(restProducts);
        removeFromDb(deleteProduct.id)
    }
    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleAddToDeleteBtn={handleAddToDeleteBtn}></ReviewItem>)
                }
            </div>
            <div className="cart-container">'
                <Cart
                    cart={cart}
                >

                    <button onClick={() => navigate('/inventory')}>Proceed checkout </button>

                </Cart>
            </div>
        </div>
    );
};

export default Order;