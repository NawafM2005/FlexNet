// Import React (always at the top)
import React from 'react';
import './LandingPage.css';
import flexnetLogo from '../Images/logo.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Define the page component
function LandingPage() {

  // Return JSX (the visible page content)
  return (
    <div className='landing-page-main'>
       <Navbar />

        <div className="landing-page-header">
            <h1 className="landing-title">Level Up Your Fitness.</h1>
            <p className="landing-subtitle">Track your workouts. Connect with others. Share your journey.</p>
            <div className="landing-header-buttons">
                <Link to="/SignupPage" className="landing-header-btn">Get Started</Link>
                <Link to="/LoginPage" className="landing-header-btn-outline">Log In</Link>
            </div>
        </div>

        <div className="landing-page-info">

            <div id="intro">
                <h3>
                    Why <span className="highlight-red">FlexNet</span>?
                </h3>                
                <p>FlexNet will help you:</p>
            </div>

            <ul className="info-list">
                <div className="our_section-left">
                    <div id="text">
                        <b>📈 Track your fitness progress and post your workouts.</b>
                        <p>Keep a detailed log of your workouts, visualize your progress, and stay consistent. FlexNet lets you track your goals and share updates to keep yourself accountable.</p>
                    </div>
                    <div id="image">
                        <img src={flexnetLogo} alt="Track Progress" style={{ objectFit: "cover", maxWidth: "400px" }} />
                    </div>
                </div>

                <div className="our_section-right">
                    <div id="text">
                        <b>💬 Connect with others on similar fitness journeys.</b>
                        <p>Follow and engage with people working toward similar goals. Build a supportive network where you can share struggles, wins, and tips to grow together.</p>
                    </div>
                    <div id="image">
                        <img src={flexnetLogo} alt="Connect with others" style={{ objectFit: "cover", maxWidth: "400px" }} />
                    </div>
                </div>

                <div className="our_section-left">
                    <div id="text">
                        <b>🧠 Stay motivated through community engagement and support.</b>
                        <p>Whether you're new or advanced, motivation can drop. FlexNet provides a community-driven space where others cheer you on, keeping you inspired and consistent.</p>
                    </div>
                    <div id="image">
                        <img src={flexnetLogo} alt="Stay Motivated" style={{ objectFit: "cover", maxWidth: "400px" }} />
                    </div>
                </div>

                <div className="our_section-right">
                    <div id="text">
                        <b>🖼️ Share updates with images, captions, and stats.</b>
                        <p>Celebrate milestones and workouts with creative posts. Add images, captions, and performance stats to make your journey visual and inspiring for others.</p>
                    </div>
                    <div id="image">
                        <img src={flexnetLogo} alt="Connect with others" style={{ objectFit: "cover", maxWidth: "400px" }} />
                    </div>
                </div>

                <div className="our_section-left">
                    <div id="text">
                        <b>🤖 Coming soon: AI-powered post assistant and smart fitness insights!</b>
                        <p>Let AI generate motivational captions, auto-create post images, and provide personalized feedback. Future updates will make sharing easier and smarter than ever.</p>
                    </div>
                    <div id="image">
                        <img src={flexnetLogo} alt="AI Assistant" style={{ objectFit: "cover", maxWidth: "400px" }} />
                    </div>
                </div>
            </ul>
        </div>
        <Footer />
    </div>
  );
}

// Export the page component
export default LandingPage;
