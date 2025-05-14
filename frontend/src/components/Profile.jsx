import React from 'react';
import "./Profile.css"
import logo from '../Images/logo.png';

const Profile = () => {
    return (
        <div className='profile_main'>
            <div className='profile_pic_section'>
                <img src={logo}></img>
                <ul>
                    <li>Posts: 100</li>
                    <li>Followers: 500</li>
                    <li>Following: 1000</li>
                </ul>
            </div>

            <div className='personal_info_section'>
                <h1>HI</h1>
            </div>

            <div className='personal_stats_section'>
                <h1>HI</h1>
            </div>
        </div>
    );
};

export default Profile;