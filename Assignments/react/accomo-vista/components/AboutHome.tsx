// components/AboutHome.tsx
import React from 'react';
import HeroLeft from './AboutHome/HeroLeft'; // Assuming you have this component
import HeroRight from './AboutHome/HeroRight'; // Assuming you have this component

const AboutHome: React.FC = () => {
    return (
        <div className="about-home flex justify-between">
            <div className="hero-container flex justify-around">
                <HeroLeft />
            </div>
            <div className="hero-right">
                <HeroRight />
            </div>
        </div>
    );
};

export default AboutHome;