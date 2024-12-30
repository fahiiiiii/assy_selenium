// components/Hero.tsx
import React from 'react';

const HeroLeft = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col">
        <div className="text-gray-600 text-sm mb-2">Entire home</div>
        <h1 className="text-2xl font-bold mb-5">Juneau Vacation Home: Stunning View + Beach Access</h1>

        <div className="flex items-center gap-2 mb-6">
          <span className="bg-gray-800 text-white px-2 py-1 rounded font-bold">9.8</span>
          <span className="font-medium">Exceptional</span>
          <a href="#" className="text-blue-600 underline">See all 24 reviews ›</a>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-7">
          <DetailItem icon="🛏️" text="2 bedrooms" />
          <DetailItem icon="🚿" text="1 bathroom" />
          <DetailItem icon="👥" text="Sleeps 4" />
          <DetailItem icon="📏" text="1156 sq ft" />
        </div>

        <AmenitiesSection />
        <ExploreSection />
      </div>
    </div>
  );
};

const DetailItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-xl text-gray-800">{icon}</span>
    <span>{text}</span>
  </div>
);

const AmenitiesSection = () => {
  return (
    <div className="mb-7">
      <h2 className="text-xl font-bold mb-4">Popular amenities</h2>
      <div className="grid grid-cols-2 gap-4">
        {['🔥 Barbecue grill', '🧺 Washer', '🌳 Outdoor Space', '🅿️ Parking available', '🍳 Kitchen', '👕 Dryer'].map((amenity) => (
          <AmenityItem key={amenity} amenity={amenity} />
        ))}
      </div>
      <a href="#" className="text-blue-600 underline mt-4 inline-block">See all property amenities ›</a>
    </div>
  );
};

const AmenityItem = ({ amenity }: { amenity: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-xl text-gray-800">{amenity.charAt(0)}</span>
    <span>{amenity.slice(2)}</span>
  </div>
);

const ExploreSection = () => {
  return (
    <div className="mt-7">
      <h2 className="text-xl font-bold mb-4">Explore the area</h2>
      {/* Map Section */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-xs bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <img src="./../../files/GoogleMapTA.webp" alt="map location" className="w-full h-auto" />
          <div className="p-4">
            <p className="text-lg font-semibold">Juneau, Alaska</p>
            <a href="#" className="text-blue-600 underline">View in a map</a>
          </div>
        </div>
      </div>

      {/* Locations List */}
      <LocationList />
    </div>
  );
};

const LocationList = () => {
  const locations = [
    { name: 'Auke Bay', distance: '5 min drive' },
    { name: 'University of Alaska Southeast', distance: '10 min drive' },
    { name: 'Mendenhall Golf Course', distance: '14 min drive' },
    { name: 'Juneau, AK (JNU-Juneau Intl.)', distance: '14 min drive' },
  ];

  return (
    <ul className="list-none flex flex-col items-center mt-4">
      {locations.map((location) => (
        <li key={location.name} className="flex items-center justify-between w-full max-w-md border-b py-2">
          <span>{location.name}</span>
          <span className="text-gray-600">{location.distance}</span>
        </li>
      ))}
      <li><a href="#" className="text-blue-600 underline mt-4 inline-block">See more about this area ›</a></li>
    </ul>
  );
};

export default HeroLeft;