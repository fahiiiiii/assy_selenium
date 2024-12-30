"use client";
// components/PhotoGallery.tsx

import React, { useState } from 'react';
import MyComponent from './MyComponents';
const PhotoGallery: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    <img src="https://images.pexels.com/photos/5845545/pexels-photo-5845545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="ghm" />
    const images = [
        {
            src: './files/main-photo.webp',
            alt: 'Lake view with deck',
        },
        {
            src: 'https://images.pexels.com/photos/5845545/pexels-photo-5845545.jpeg?auto=compress&cs=tinysrgb&w=600',
            
            alt: 'House exterior',
        },
        {
            src: 'https://images.pexels.com/photos/16448716/pexels-photo-16448716/free-photo-of-a-chess-board-and-chairs-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Living room',
        },
        {
            src: 'https://images.pexels.com/photos/4846221/pexels-photo-4846221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Interior view',
        },
        {
            src: 'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Gallery Thumbnail',
            count: '30+'
        }
    ];

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        
        <div className="gallery-container p-5 max-w-6xl mx-auto">
            <div className="photo-gallery flex gap-2 h-96">
                <div className="main-photo flex-2 h-full">
                    <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="side-photos flex flex-col gap-2 flex-1 overflow-hidden">
                    {images.slice(1).map((image, index) => (
                        <div className="photo-row flex gap-2 flex-1" key={index}>
                            <div className="photo relative flex-1 h-full cursor-pointer" onClick={() => openModal(index + 1)}>
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                                {image.count && (
                                    <div className="photo-count absolute bottom-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-md text-sm">
                                        {image.count}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="modal-content bg-white p-5 rounded-lg relative">
                        <span className="close-gallery absolute top-2 right-2 cursor-pointer" onClick={closeModal}>
                            &times;
                        </span>
                        <button className="prev absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevImage}>
                            &#10094;
                        </button>
                        <button className="next absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextImage}>
                            &#10095;
                        </button>
                        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="w-full h-auto rounded-lg" />
                        <div className="modal-title text-center mt-4">{images[currentImageIndex].alt}</div>
                    </div>
                </div>
            )}

            {/* Tabs */}
            <div className="tabs mt-5 border-b border-gray-300">
                <a href="#" className="active inline-block py-3 px-4 text-gray-700">Overview</a>
                <a href="#" className="inline-block py-3 px-4 text-gray-700">Amenities</a>
                <a href="#" className="inline-block py-3 px-4 text-gray-700">Policies</a>
            </div>
        </div>
    );
};

export default PhotoGallery;