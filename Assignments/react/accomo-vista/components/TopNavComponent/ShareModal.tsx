// components/ShareModal.tsx
"use client"; // This directive indicates that this component uses client-side features.
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentAlt, faLink } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookSquare, faWhatsapp, faFacebookMessenger, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';



// import React, { useState, useEffect } from 'react';
// import { MessageSquare, Link, Facebook, Check } from 'lucide-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Link, Facebook, Check } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


interface ShareModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isVisible, onClose }) => {
    const [messageCount] = useState(3);
    const [copySuccess, setCopySuccess] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Handle initial mount animation
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle visibility changes
    useEffect(() => {
        if (!isVisible) {
            setMounted(false);
        } else {
            setMounted(true);
        }
    }, [isVisible]);

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVisible) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isVisible]);

    const handleClose = () => {
        setIsClosing(true);
        setMounted(false);
        // Add a slight delay before actually closing to allow for animation
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 200);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const copyLink = async () => {
        const link = window.location.href || "https://example.com/property-link";
        
        try {
            await navigator.clipboard.writeText(link);
            setCopySuccess(true);
            
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
            alert("Failed to copy link. Please try again.");
        }
    };

    if (!isVisible && !isClosing) return null;

    return (
        <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                mounted ? 'bg-opacity-50' : 'bg-opacity-0'
            } flex items-center justify-center ${
                isVisible ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            onClick={handleOverlayClick}
            aria-hidden={!isVisible}
        >
            <div 
                className={`bg-white p-6 w-80 rounded-lg relative text-center transform transition-all duration-300 ${
                    mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                {/* Close button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full text-xl w-8 h-8 flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <h2 className="text-xl font-semibold mb-4">Share</h2>

                {/* Property Info */}
                <div className="mb-6">
                    <img
                        src="/api/placeholder/320/200"
                        alt="Property"
                        className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-semibold mb-1">
                        Juneau Vacation Home: Stunning View + Beach Access
                    </h3>
                    <p className="text-gray-600">United States of America</p>
                </div>

                {/* Share Options */}
                <div className="space-y-4">
                    <div className="flex justify-center gap-8">
                        {/* Messages */}
                        <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
                            <MessageSquare 
                                size={24} 
                                className="text-teal-500"
                            />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {messageCount}
                            </span>
                        </div>
                        
                        {/* Facebook */}
                        <button className="text-[#3b5998] hover:opacity-80 transition-opacity">
                            <Facebook size={24} className="fill-current" />
                        </button>
                        
                        {/* WhatsApp */}
                        <div className="w-6 h-6 text-[#25d366] cursor-pointer hover:opacity-80 transition-opacity">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="flex justify-center gap-8">
                        {/* Messenger */}
                        <div className="w-6 h-6 text-[#0084ff] cursor-pointer hover:opacity-80 transition-opacity">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
                            </svg>
                        </div>
                        
                        {/* X (Twitter) */}
                        <button className="cursor-pointer hover:opacity-80 transition-opacity">
                            <FontAwesomeIcon 
                                icon={faXTwitter} 
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                {/* Copy Link Button */}
                <button 
                    onClick={copyLink}
                    className={`mt-6 w-full flex items-center justify-center gap-2 p-3 rounded-lg transition-colors ${
                        copySuccess 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                    {copySuccess ? (
                        <>
                            <Check size={18} />
                            <span>Link copied!</span>
                        </>
                    ) : (
                        <>
                            <Link size={18} />
                            <span>Copy link</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareModal;