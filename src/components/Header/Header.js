import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory"> Inventory</Link>
                <Link to="/about"> About</Link>

            </nav>
        </div>
    );
};

export default Header;