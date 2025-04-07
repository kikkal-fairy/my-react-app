import React from 'react';
import './IconButton.css';

const IconButton = ({ icon, onClick, alt = "icon" }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={icon} alt={alt} className="icon-image" />
    </button>
  );
};

export default IconButton;
