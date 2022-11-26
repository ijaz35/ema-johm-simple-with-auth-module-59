import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/db'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])



    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handlerAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handlerAddToCart={handlerAddToCart}
                ></Product>)}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}>
                    <Link className="text-decoration" to="/order">
                        <button className='review-btn'>
                            <p>Review Order</p>
                            <FontAwesomeIcon
                                icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;