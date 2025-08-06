import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <h1>Your College Journey Starts Here</h1>
          <p>Discover courses, subjects, and resources from top colleges</p>
          <Link to="/colleges" className="cta-button">
            Explore Colleges
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📚 Course Information</h3>
              <p>Detailed information about courses from popular colleges</p>
            </div>
            <div className="feature-card">
              <h3>📅 Semester Planning</h3>
              <p>Complete subject breakdown for each semester</p>
            </div>
            <div className="feature-card">
              <h3>🎥 Learning Resources</h3>
              <p>Curated YouTube videos and notes for each subject</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
