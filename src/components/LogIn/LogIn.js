import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //for protected route
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || '/'

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }
    return (


        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleUserSignIn}>
                <div className="input-group">
                    <label className='form-label' htmlFor="email" required>Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="password" required>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                </div>
                {loading && <p>Loading...</p>}
                <p style={{ color: 'red' }}>{error?.message}</p>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                New to Ema-john? <Link className="form-link" to='/signup'>Create New Account</Link>
            </p>

        </div>

    );
};

export default LogIn;