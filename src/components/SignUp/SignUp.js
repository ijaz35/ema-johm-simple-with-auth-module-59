import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }

    //sign up means create new user
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be six character')
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (

        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
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
                <input className='form-submit' type="submit" value="Sign up" />
            </form>
            <p>
                Already have an account? <Link className="form-link" to='/login'>Login</Link>
            </p>

        </div>
    );
};

export default SignUp;