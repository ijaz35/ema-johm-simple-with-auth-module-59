import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (


        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="input-group">
                    <label className='form-label' htmlFor="email" required>Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="password" required>Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                New to Ema-john? <Link className="form-link" to='/signup'>Create New Account</Link>
            </p>

        </div>

    );
};

export default LogIn;