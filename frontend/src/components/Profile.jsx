import React, { useState } from 'react';
import "./Profile.css"
import logo from '../Images/logo.png';

const Profile = () => {

    const [personal_info_edit, setpersonal_info_edit] = useState(false);
    const [personal_stats_edit, setpersonal_stats_edit] = useState(false);

    const handleInfoEditClick = () => {
        setpersonal_info_edit(true);
    };

    const handleStatsEditClick = () => {
        setpersonal_stats_edit(true);
    };

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

            <div className='personal_section'>
                <div className='personal_info_section'>
                    <h1>Personal Info</h1>
                    <form className='personal_info_form'>
                        <div className='personal_group'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' placeholder='Username' disabled={!personal_info_edit}/>
                        </div>
                        
                        <div className='personal_group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' placeholder='Email' disabled={!personal_info_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='age'>Age</label>
                            <input type='number' id='age' placeholder='Age' disabled={!personal_info_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='dob'>Date of Birth</label>
                            <input type='date' id='dob'disabled={!personal_info_edit} />
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='gender'>Gender</label>
                            <select id='gender' disabled={!personal_info_edit}>
                                <option value=''>Select Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                                <option value='prefer_not_to_say'>Prefer not to say</option>
                            </select>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='location'>Location</label>
                            <input type='text' id='location' placeholder='Location' disabled={!personal_info_edit}/>
                        </div>
                    </form>
                    <div className='btn_section'>
                        <button className='edit_btn' onClick={handleInfoEditClick}>Edit</button>
                        <button className='save_btn'>Save</button>
                    </div>
                </div>

                <div className='personal_stats_section'>
                    <h1>Stats</h1>
                    <form className='personal_stats_form'>
                       <div className='personal_group'>
                            <label htmlFor='height'>Height</label>
                            <input type='text' id='height' placeholder='e.g., 5ft 10in or 178cm' disabled={!personal_stats_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='weight'>Weight</label>
                            <input type='text' id='weight' placeholder='e.g., 160 lbs or 72.5 kg' disabled={!personal_stats_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='bodyFat'>Body Fat %</label>
                            <input type='number' id='bodyFat' placeholder='e.g., 15' step='0.1' min='0' max='100' disabled={!personal_stats_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='fitnessGoal'>Fitness Goal</label>
                            <input type='text' id='fitnessGoal' placeholder='e.g., Build muscle, lose fat, etc.' disabled={!personal_stats_edit}/>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='experienceLevel'>Experience Level</label>
                            <select id='experienceLevel' disabled={!personal_stats_edit}>
                                <option value=''>Select Experience Level</option>
                                <option value='beginner'>Beginner</option>
                                <option value='intermediate'>Intermediate</option>
                                <option value='advanced'>Advanced</option>
                            </select>
                        </div>

                        <div className='personal_group'>
                            <label htmlFor='workoutSplit'>Workout Split</label>
                            <input type='text' id='workoutSplit' placeholder='e.g., Push/Pull/Legs, Bro Split, etc.' disabled={!personal_stats_edit}/>
                        </div>
                    </form>
                     <div className='btn_section'>
                        <button className='edit_btn' onClick={handleStatsEditClick}>Edit</button>
                        <button className='save_btn'>Save</button>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Profile;