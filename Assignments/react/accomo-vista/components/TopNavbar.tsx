"use client"; // Add this line at the top of your file

import React, { useState } from 'react';


const regions = [
  "United States", "Portugal", "United Kingdom", "France", "Germany",
  "Canada", "Australia", "Brazil", "China", "India", "Japan",
  "South Korea", "Italy", "Mexico", "Spain", "Russia",
  "Netherlands", "Sweden", "Norway", "Switzerland", "Argentina",
  "South Africa", "Egypt", "Turkey", "Saudi Arabia",
  "United Arab Emirates", "Israel", "Thailand", "Philippines",
  "Vietnam", "Malaysia", "Indonesia", "New Zealand",
  "Ireland", "Austria", "Belgium", "Denmark",
  "Finland", "Poland", "Czech Republic", "Hungary",
  "Greece", "Ukraine", "Colombia", "Chile",
  "Peru", "Venezuela", "Pakistan", "Bangladesh",
  "Romania"
];

const TopNavbar = () => {
  const [selectedRegion, setSelectedRegion] = useState("United States");
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
    setShowConfirmationModal(true);
    setTimeout(() => setShowConfirmationModal(false), 2000); // Auto close confirmation after 2 seconds
    setShowSettingsModal(false);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-end items-center border-b border-gray-300 shadow">
        <div className="flex items-center gap-2 p-2 cursor-pointer" onClick={() => setShowSettingsModal(true)}>
          <span>🌐</span>
          <span>{selectedRegion}</span>
        </div>
        <a href="#" className="p-2 text-gray-800 hover:bg-gray-200 rounded">🏠 Trip Boards</a>
        <a href="#" className="p-2 text-gray-800 hover:bg-gray-200 rounded">📝 List your property</a>
        <a href="#" className="p-2 text-gray-800 hover:bg-gray-200 rounded">❓ Help</a>
        <a href="#" className="p-2 text-gray-800 hover:bg-gray-200 rounded">✈️ My trips</a>
        <a href="#" className="p-2 text-blue-600 hover:bg-blue-100 rounded">Sign in</a>
      </nav>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Display settings</h2>
              <button onClick={() => setShowSettingsModal(false)} className="text-xl">&times;</button>
            </div>
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 p-4 mb-4 rounded">
              Changing your region could change your rewards program. To stay with your current rewards program keep your region the same.
            </div>
            <div className="mb-4">
              <label htmlFor="regionSelect" className="block mb-1 font-medium">Region</label>
              <select id="regionSelect" value={selectedRegion} onChange={handleRegionChange} className="w-full p-2 border border-gray-300 rounded">
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <button onClick={() => setShowSettingsModal(false)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Save</button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <div className="text-green-500 text-xl mb-4">✓</div>
            <h3>Region Updated</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;