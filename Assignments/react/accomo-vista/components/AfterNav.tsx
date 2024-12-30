// pages/index.tsx

import React from "react";
import TopContainer from "../components/TopContainer"; // Adjust the path if needed
import PhotoGallery from "../components/PhotoGallery";
import AboutHome from "../components/AboutHome";
const AfterNav: React.FC = () => {
  return (
    <div className="after-nav">
      <TopContainer />

      {/* PHOTO */}
      <div className="gallery-container">
        <PhotoGallery />
      </div>
      <AboutHome/>
    </div>
  );
};

export default AfterNav;
