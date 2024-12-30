"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Heart } from 'lucide-react';

const SaveModal = () => {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem("isSaved") === "true";
        setIsSaved(savedState);
    }, []);

    const toggleSaveState = () => {
        const newSavedState = !isSaved;
        setIsSaved(newSavedState);
        localStorage.setItem("isSaved", String(newSavedState));
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    <span>See all properties</span>
                </button>
                
                <button 
                    onClick={toggleSaveState}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                >
                    <Heart 
                        className={`w-5 h-5 transition-colors ${
                            isSaved ? 'text-red-500 fill-red-500' : 'text-gray-600'
                        }`}
                    />
                    <span>Save</span>
                </button>
            </div>
        </div>
    );
};

export default SaveModal;