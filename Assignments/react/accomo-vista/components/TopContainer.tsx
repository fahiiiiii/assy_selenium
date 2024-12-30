"use client";
import React, { useState } from 'react';
import SaveModal from './../components/TopNavComponent/SaveModal';
import ShareModal from './../components/TopNavComponent/ShareModal';

interface SaveModalProps {
  isVisible: boolean;
  onClose: () => void;
}
const TopContainer: React.FC = () => {
  const [isShareModalVisible, setShareModalVisible] = useState(false);
  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
  
  const SaveModal: React.FC<SaveModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Don't render the modal if it's not visible
  
    return (
      <div className="modal">
        <div className="modal-content">
          {/* <button onClick={onClose}>Close</button> */}
          {/* <p>Save your favorite items here!</p> */}
        </div>
      </div>
    );
  };

  return (
    <div className="top-container">
      <div className="navigation flex justify-end items-center p-4">
        <button
          className="share-btn2 py-2 px-4 rounded"
          onClick={() => setShareModalVisible(true)}
        >
          Share
        </button>
        <button
          className="save-btn py-2 px-4 rounded"
          onClick={() => setSaveModalVisible(true)}
        >
          Save
        </button>
      </div>

      <ShareModal
        isVisible={isShareModalVisible}
        onClose={() => setShareModalVisible(false)}
      />
      <SaveModal
  isVisible={isSaveModalVisible}
  onClose={() => setSaveModalVisible(false)}
/>

    </div>
  );
};

export default TopContainer;
