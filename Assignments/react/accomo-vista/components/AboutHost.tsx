import React from 'react';

const AboutHost: React.FC = () => {
    return (
        <div className="max-w-xl p-5 font-sans">
            <div className="section mb-10">
                <h2 className="section-title text-2xl font-bold text-gray-800 mb-5">About the host</h2>
                <div className="host-info flex flex-col gap-5">
                    <div className="host-header flex items-center gap-2">
                        <span className="host-name text-lg font-medium text-gray-800">Hosted by Evolve</span>
                    </div>
                    <div className="languages-section flex flex-col">
                        <div className="languages-title text-md font-medium text-gray-800">Languages:</div>
                        <div className="languages-list text-gray-600">English, French, German, Spanish</div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title text-2xl font-bold text-gray-800 mb-5">Send a message</h2>
                <a href="#" className="contact-button inline-block bg-white border border-gray-800 rounded-lg py-3 px-6 text-gray-800 font-medium hover:bg-gray-200 transition duration-200">
                    Contact host
                </a>
            </div>
        </div>
    );
};

export default AboutHost;