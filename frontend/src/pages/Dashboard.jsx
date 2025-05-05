import React from 'react';
import "./Dashboard.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <Footer />
        </div>
    );
};

export default Dashboard;