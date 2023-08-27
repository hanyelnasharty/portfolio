import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const ListingzModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="open-modal-button" onClick={openModal}>Preview</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close-button">
              &times;
            </span>
                <ReactPlayer
                    url={'/videos/listingz-preview.mp4'} 
                    controls={true} 
                    height='700px'
                    width='480px'
                    className="video"
                />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingzModal;
