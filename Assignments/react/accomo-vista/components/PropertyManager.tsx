// components/PropertyManager.tsx

import React from 'react';

const PropertyManager: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-5 text-gray-700">
            <div className="flex items-center mb-5">
                <img src="/files/property-manager-sign.png" alt="Property Manager" className="w-10 h-10 rounded-full" />
                <h1 className="text-xl font-semibold ml-3">Property Manager</h1>
            </div>
            <div className="mb-5">
                <div>Languages:</div>
                <span>English, French, German, Spanish</span>
            </div>
            <div className="ameen-container mb-5">
                <h2 className="text-2xl text-gray-800 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                        { icon: '🍳', text: 'Kitchen' },
                        { icon: '🧺', text: 'Washer' },
                        { icon: '👕', text: 'Dryer' },
                        { icon: '🌳', text: 'Outdoor Space' },
                        { icon: '🅿️', text: 'Parking available' },
                        { icon: '🌊', text: 'Ocean view' },
                    ].map((amenity) => (
                        <div key={amenity.text} className="flex items-center">
                            <span className="text-xl mr-2">{amenity.icon}</span>
                            <span className="text-gray-600">{amenity.text}</span>
                        </div>
                    ))}
                </div>
                <a href="#" className="text-blue-500 hover:underline">See all 34 amenities</a>
            </div>

            {/* Search Container */}
            <div className="bg-blue-200 p-5 rounded-lg mb-5">
                <div className="font-bold text-lg">Have a question?</div>
                <p>Get instant answers with AI-powered search of property info and reviews!</p>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center opacity-50">
                        <i className='bx bx-search-alt-2'></i>
                        <div className="ml-2">
                            <div id="div121bold" className="font-bold">Ask a question</div>
                            <div>Is there any parking?</div>
                        </div>
                    </div>
                    <button className="bg-blue-500 rounded-full p-2 text-white">Ask</button>
                </div>
            </div>

            {/* House Rules */}
            <div className="house-rules mb-5">
                <h2 className="text-xl font-semibold mb-3">House Rules</h2>
                <div className="flex gap-10 mb-4">
                    <div>Check in after 3:00 PM</div>
                    <div>Check out before 11:00 AM</div>
                </div>
                <div>Minimum age to rent: 25</div>

                {/* Rules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                        { icon: '👶', title: 'Children', description: 'Children allowed: ages 0-17' },
                        { icon: '🎉', title: 'Events', description: 'No events allowed' },
                        { icon: '🐾', title: 'Pets', description: 'No pets allowed' },
                        { icon: '🚭', title: 'Smoking', description: 'Smoking is not permitted' },
                    ].map((rule) => (
                        <div key={rule.title} className="flex items-start">
                            <span className="text-xl mr-3">{rule.icon}</span>
                            <div>
                                <h3 className="font-semibold">{rule.title}</h3>
                                <p className="text-gray-600">{rule.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cancellation Policy */}
            <div className="cancellation-container mb-5">
                <h2 className="text-xl font-semibold mb-3">Cancellation</h2>

                {/* Timeline Wrapper */}
                <div className="border p-4 rounded-lg mb-4">
                    <h3>Full refund before Nov 4 at 11:59 PM</h3>
                    <p>After that, you won't get a refund.</p>
                </div>

                {/* Policies */}
                {[
                    { label: "Before", date: "Nov 4", description: "Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund." },
                    { label: "After", date: "Nov 4", description: "After that, you won't get a refund." }
                ].map((policy) => (
                    <div key={policy.label} className="flex justify-between border-b py-2">
                        <span>{policy.label}:</span>
                        <span>{policy.date}</span>
                        <span>{policy.description}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PropertyManager;