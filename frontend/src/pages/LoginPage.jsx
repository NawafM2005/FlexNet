import React from 'react';
import './LoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div className='login-page-main'>
            <Navbar />
            
            <div className='login-page'>
                <h1 className='login-title'>Login</h1>
                <form className='login-form'>
                    <div className='form-group'>
                        <label htmlFor='username_email'>Username/Email</label>
                        <input type='text' id='username_email' name='username_email' required placeholder='Username/Email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required placeholder='Password' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='c_password'>Confirm Password</label>
                        <input type='password' id='c_password' name='c_password' required placeholder='Confirm Password' />
                    </div>
                    <button type='submit' className='login-button'>Login</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default LoginPage;