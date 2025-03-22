import React, { useState } from "react";
import arrowIcon from "../assets/arrow_drop_down.svg"; // Import the arrow icon

const DropDownSelect = ({ label, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdown-select">
      {label && <label className="dropdown-label">{label}</label>}
      <div className="dropdown-wrapper">
        <select
          className="dropdown-box"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {/* Add the custom arrow */}
        <div className="custom-arrow">
          <img src={arrowIcon} alt="Dropdown Arrow" />
        </div>
      </div>
    </div>
  );
};

export default DropDownSelect;