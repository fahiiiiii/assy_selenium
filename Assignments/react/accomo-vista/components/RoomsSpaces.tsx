// components/RoomsSpaces.tsx

import React from 'react';

const RoomsSpaces: React.FC = () => {
    return (
        <div className="text-gray-800 leading-relaxed">
            <section className="mb-8">
                <h2 className="text-2xl mb-4 text-gray-900">Rooms & beds</h2>
                <div className="text-lg text-gray-600 font-semibold mb-4">2 bedrooms (sleeps 4)</div>

                <div className="flex gap-10 mb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl text-gray-500">🛏️</span>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-700">Bedroom 1</span>
                            <span className="text-gray-500 text-sm">1 Queen Bed</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xl text-gray-500">🛏️</span>
                        <div className="flex flex-col">
                            <span className="font-medium text-gray-700">Bedroom 2</span>
                            <span className="text-gray-500 text-sm">1 Twin Bed</span>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-400 opacity-40 mb-6" />

                <div className="mb-6">
                    <div className="text-lg text-gray-600 font-semibold">1 bathroom</div>
                    <div className="text-gray-500 mt-1">Full Bathroom</div>
                </div>
            </section>

            <hr className="border-gray-400 opacity-40 mb-8" />

            <section>
                <h2 className="text-2xl mb-4 text-gray-900">Spaces</h2>
                <ul className="list-none mb-4">
                    {['Deck or patio', 'Kitchen', 'Balcony', 'Garden'].map((space) => (
                        <li key={space} className="flex items-center gap-2 mb-3 text-gray-600">
                            <span className="text-xl">🏠</span>
                            {space}
                        </li>
                    ))}
                </ul>
                <a href="#" className="inline-block mt-2 text-blue-600 hover:underline text-sm">
                    See all rooms and beds details
                </a>
            </section>
        </div>
    );
};

export default RoomsSpaces;