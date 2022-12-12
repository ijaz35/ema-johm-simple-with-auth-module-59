import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }

    //sign up means create new user
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your password did not match')
            return;
        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>
                Already have an account? <Link className="form-link" to='/login'>Login</Link>
            </p>

        </div>
    );
};

export default SignUp;