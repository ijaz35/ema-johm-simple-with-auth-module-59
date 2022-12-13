import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [user] = useAuthState(auth)
    // const navigate = useNavigate();



    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handleNameBlur = (event) => {
        setName(event.target.value)
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    // if (user) {
    //     navigate('/')
    // }


    const handleCreateUser = (event) => {
        event.preventDefault()
        const shipping = { name, email, address, phone };
        console.log(shipping)

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label className='form-label' htmlFor="name">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="phone">Phone number</label>
                    <input onBlur={handlePhoneBlur} type="text" name="password" id="" required />
                </div>

                <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
        </div>
    );
};

export default Shipping;