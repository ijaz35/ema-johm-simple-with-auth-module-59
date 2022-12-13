import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory"> Inventory</Link>
                <Link to="/about"> About</Link>
                {user ? <button onClick={() => signOut()}>SignOut</button>
                    :
                    <Link to='/login'>Login</Link>}

            </nav>
        </div>
    );
};

export default Header;