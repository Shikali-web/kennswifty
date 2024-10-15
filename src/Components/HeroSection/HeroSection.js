import React from 'react';
import { Button } from 'antd';
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">Welcome to Kenswifty Consultancy Group Limited</h1>
        <p className="hero-slogan">Harnessing Knowledge and Technology to Foster Organizational and Societal Change </p>
        <Button type="primary" className="hero-button" href='https://www.google.com'>Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;
