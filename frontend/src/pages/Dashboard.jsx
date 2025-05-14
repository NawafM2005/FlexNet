import React, { useState } from 'react';
import "./Dashboard.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';

const Dashboard = () => {

    const [currClicked, setCurrClicked] = useState("Dashboard");

    return (
        <div className='dashboard_main'>
            <Navbar />
            <div className='section_bar'>
                <a onClick={() => setCurrClicked("Dashboard")} style={currClicked === "Dashboard" ? { backgroundColor: 'rgb(255, 0, 81)', pointerEvents: 'none'}: {}}>Dashboard</a>
                <a onClick={() => setCurrClicked("Create")} style={currClicked === "Create" ? { backgroundColor: 'rgb(255, 0, 81)', pointerEvents: 'none'}: {}}>Create</a>
                <a onClick={() => setCurrClicked("Profile")} style={currClicked === "Profile" ? { backgroundColor: 'rgb(255, 0, 81)', pointerEvents: 'none'}: {}}>Profile</a>
            </div>

            {currClicked === "Profile" && <Profile />}
            
            <Footer />
        </div>
    );
};

export default Dashboard;