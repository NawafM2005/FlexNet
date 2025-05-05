import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username_email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the page from refreshing

        try {
            const res = await fetch('http://localhost:5050/api/auth/login', {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({
                    username_email: formData.username_email,
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
    }

    return (
        <div className='login-page-main'>
            <Navbar />
            
            <div className='login-page'>
                <h1 className='login-title'>Login</h1>
                <form className='login-form'>
                    <div className='form-group'>
                        <label htmlFor='username_email'>Username/Email</label>
                        <input type='text' id='username_email' name='username_email' required placeholder='Username/Email' onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required placeholder='Password' onChange={handleChange}/>
                    </div>
                    <button type='submit' className='login-button' onClick={handleSubmit}>Login</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default LoginPage;