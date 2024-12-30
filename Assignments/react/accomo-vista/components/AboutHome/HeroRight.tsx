"use client";
import React, { useState } from 'react';
import { Camera, Calendar, Loader } from 'lucide-react';

// Define interfaces for component props
interface DateInputProps {
  label: string;
  date: string;
}

interface CounterProps {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const HeroRight: React.FC = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelWithPet, setTravelWithPet] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleTravelerInput = () => {
    setShowDropdown(!showDropdown);
  };

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  const incrementChildren = () => {
    setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) setChildren(children - 1);
  };

  const updateTravelerDisplay = () => {
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 w-80">
        <div className="flex items-center bg-gray-800 text-white p-3 rounded-lg">
          <span className="text-3xl">
            <Loader className="w-8 h-8 animate-spin" />
          </span>
          <div className="flex flex-col items-center ml-4">
            <span className="text-gray-300 text-sm">Members get our best prices when signed in!</span>
            <button className="bg-blue-600 text-white rounded-full px-4 py-2 mt-2">Sign In</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-b-lg">
          <div className="text-xl font-bold mb-2">$134 <span className="text-gray-600 text-sm">per night</span></div>
          <hr className="border-gray-200 mb-4" />
          <div className="text-sm mb-2">
            <span className="text-green-600 font-semibold">Free cancellation</span> before Mon, Nov 4
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <span>Your dates are available</span>
            <Calendar className="ml-2 w-4 h-4 text-green-600" />
          </div>

          {/* Date Picker */}
          <div className="flex gap-4 mb-4">
            <DateInput label="Start date" date="Nov 18" />
            <DateInput label="End date" date="Nov 20" />
          </div>

          {/* Travelers Input */}
          <div className="relative mb-4">
            <div onClick={toggleTravelerInput} className="border p-3 rounded-lg cursor-pointer flex justify-between items-center">
              <small>Travelers</small>
              <span>{adults} adults, {children} children</span>
            </div>
            {showDropdown && (
              <div className="absolute z-10 border border-gray-300 bg-white p-4 mt-2 rounded-lg shadow-lg w-full">
                {/* Adults Counter */}
                <Counter 
                  label="Adults" 
                  count={adults} 
                  onIncrement={incrementAdults} 
                  onDecrement={decrementAdults} 
                />
                {/* Children Counter */}
                <Counter 
                  label="Children" 
                  count={children} 
                  onIncrement={incrementChildren} 
                  onDecrement={decrementChildren} 
                />
                {/* Pet Option */}
                <div className="flex items-center mt-2">
                  <input 
                    type="checkbox" 
                    id="travelWithPet" 
                    checked={travelWithPet} 
                    onChange={() => setTravelWithPet(!travelWithPet)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="travelWithPet" className="ml-2 text-sm">I am traveling with pet</label>
                </div>
                {/* Done Button */}
                <button 
                  onClick={updateTravelerDisplay} 
                  className="w-full bg-blue-600 text-white rounded-lg py-2 mt-3 hover:bg-blue-700"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Total Price Section */}
          <div className="flex justify-between font-bold mb-2">
            <span>Total</span>
            <span>$843</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">Total includes fees, not tax</p>

          {/* Book Button */}
          <button className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg mb-2 hover:bg-blue-800">
            Book now
          </button>
          <p className="text-center text-gray-500 text-sm">You will not be charged yet</p>
        </div>

        {/* Contact Host Section */}
        <a href="#" className="text-blue-500 underline mt-4 hover:text-blue-600">Contact host</a>
        <hr className="border-gray-200 my-2" />
        <p className="text-gray-500 text-sm">Property #9838104ha</p>
      </div>
    </div>
  );
};

const DateInput: React.FC<DateInputProps> = ({ label, date }) => (
  <div className="flex flex-col flex-grow border p-3 rounded-lg hover:border-gray-400">
    <small className="text-gray-600">{label}</small>
    <span className="font-medium">{date}</span>
  </div>
);

const Counter: React.FC<CounterProps> = ({ label, count, onIncrement, onDecrement }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm">{label}</span>
    <div className="flex items-center">
      <button 
        onClick={onDecrement} 
        disabled={count <= (label === 'Adults' ? 1 : 0)} 
        className={`w-8 h-8 border rounded-full ${count <= (label === 'Adults' ? 1 : 0) ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        –
      </button>
      <span className="mx-2 w-6 text-center">{count}</span>
      <button 
        onClick={onIncrement} 
        className="w-8 h-8 border rounded-full bg-gray-100 hover:bg-gray-200"
      >
        +
      </button>
    </div>
  </div>
);

export default HeroRight;