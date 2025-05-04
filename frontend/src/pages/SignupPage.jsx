import React, { useState } from 'react';
import './SignUpPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { redirect, useNavigate } from 'react-router-dom';

const SignupPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        c_password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Split the name and value from the event target
        
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page from refreshing

        if (formData.password !== formData.c_password) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const res = await fetch('http://localhost:5050/api/auth/register', {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await res.json();

            if (res.ok) {
                navigate("/Dashboard");
            } else {
                alert(data.message || 'Something went wrong.');
            }
        }
        catch (err) {
            console.error(err);
            alert('Server error. Please try again later.');
        }
    };


  return (
    <div className='signup-page-main'>
        <Navbar />

        <div className='signup-page'>
            <h1 className='signup-title'>Create Your Account</h1>
            <form className='signup-form'>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' required placeholder='Username' value={formData.username} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required placeholder='Email' value={formData.email} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required placeholder='Password' value={formData.password} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='c_password'>Confirm Password</label>
                    <input type='password' id='c_password' name='c_password' required placeholder='Confirm Password' value={formData.c_password} onChange={handleChange}/>
                </div>
                <button type='submit' className='signup-button' onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>

        <Footer />
    </div>
  );
};

export default SignupPage;