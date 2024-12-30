// components/AboutThisProperty.tsx

import React from 'react';

const AboutThisProperty: React.FC = () => {
    return (
        <div className="text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">About this Property</h2>
            <section className="property-info mb-8">
                <h3 className="text-xl mb-2">Juneau Vacation Home: Stunning View + Beach Access</h3>
                <div className="text-gray-600 mb-4">
                    Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! 
                    Perched on the shore of Lena Cove, this 2-bedroom, 1-bath home is the perfect gateway for those looking 
                    to enjoy a relaxing retreat surrounded by nature. Spend your day fishing for King Salmon, exploring 
                    Lena Beach and the rocky coastline, or hiking the nearby trails. After your outdoor adventure, kick 
                    back on the private deck and admire the breathtaking panoramic views!
                </div>
            </section>

            <section className="the-property-section mb-8">
                <h2 className="text-xl font-semibold">-- THE PROPERTY --</h2>
                <div className="text-gray-600 mb-2">
                    CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided
                </div>
                <div className="text-gray-600 mb-4">
                    Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed
                </div>
                <div className="highlights-section mb-4">
                    <h4 className="text-lg font-semibold">HOME HIGHLIGHTS</h4>
                    <ul className="list-none grid grid-cols-2 gap-4">
                        {[
                            { icon: '📺', text: 'Flat-screen TV' },
                            { icon: '🧺', text: 'Washer/dryer' },
                            { icon: '🚿', text: 'Toilet, toaster, dishwasher/flatware, trash bags/paper towels, Crockpot' },
                            { icon: '🍽️', text: 'Dining table' },
                            { icon: '🧘‍♀️', text: 'Linens/towels, keyless entry, hair dryer, ceiling fans' },
                            { icon: '🔥', text: 'General heating' }
                        ].map((highlight) => (
                            <li key={highlight.text} className="flex items-center text-gray-600">
                                <span className="mr-2">{highlight.icon}</span>
                                {highlight.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="rest-easy mb-8">
                <h2 className="text-xl font-semibold">-- REST EASY WITH US --</h2>
                <div className="text-gray-600 mb-4">
                    Evolve makes it easy to find and book properties you'll never want to leave. You can relax knowing 
                    that our properties will always be ready for you and that we'll answer the phone 24/7. Even better, 
                    if anything is off about your stay, we'll make it right. You can count on our homes and our people 
                    to make you feel welcome—because we know what vacation means to you.
                </div>
            </section>

            <section className="location-section mb-8">
                <h2 className="text-xl font-semibold">-- THE LOCATION --</h2>
                <div className="text-gray-600 mb-4">
                    GREAT OUTDOORS: Lena Cove (on-site). Lena Beach Recreation Area (0.5 miles). Glacier Gardens Rainforest Adventures (10 miles). Mendenhall Glacier (10 miles). Twin Lakes (13 miles).
                </div>
                <div className="text-gray-600 mb-4">
                    THINGS TO DO: Mendenhall Golf (8 miles), Diamond Park Aquatic Center (8 miles), Riverside Rotary Park (8 miles), Alaska State Museum (16 miles), Last Chance Mining Museum (18 miles), AJ Mine Gastneau Mill Tours (20 miles).
                </div>
                <div className="text-gray-600 mb-4">
                    LOCAL FARE: Forbidden Peak Brewery (5 miles), The Grind Coffee Company (7 miles), Four Plates Cocina Peruana (7 miles), Sandbar & Grill (7 miles), Zerelda's Bistro (8 miles), Donna's Restaurant (9 miles), Alaskan Brewing Co. (13 miles).
                </div>
                <div className="text-gray-600 mb-4">
                    AIRPORT: Juneau International Airport (9 miles).
                </div>
            </section>

            <section className="policies-section mb-8">
    <h2 className="text-xl font-semibold">-- POLICIES --</h2>
    <ul className="list-none text-gray-600">
        {[
            "No smoking",
            "No pets allowed",
            "No events, parties, or large gatherings",
            "Must be at least 25 years old to book",
            "Additional fees and taxes may apply",
            "Photo ID may be required upon check-in",
            "The property requires stairs to access",
            "The property does not have air conditioning",
            "The property sleeps 4 guests in 2 beds, with room for 4 total by using the full floor mattress"
        ].map((policy) => (
            <li key={policy} className="mb-1 before:content-['-'] before:mr-1">{policy}</li>
        ))}
    </ul>
</section>
        </div>
    );
};

export default AboutThisProperty;