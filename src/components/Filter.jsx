import React from "react";
import DropDownSelect from "../components/DropDownSelect"; // Import DropDownSelect

export default function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-content">
        <h2>Filter Your Search</h2>

        {/* Repeat for other dropdowns */}
        <div className="filter-item">
          <DropDownSelect label="Activity Type" placeholder="Select Activity Type" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Audience Type" placeholder="Select Audience Type" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Local Authority/ Area Location" placeholder="Select Local Authority" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Delivery Method" placeholder="Select Delivery Method" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Group Size" placeholder="Select Group Size" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Eligibility Criteria" placeholder="Select Eligibility Criteria" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Time Commitment" placeholder="Select Preferred Duration" />
        </div>
        <div className="filter-item">
          <DropDownSelect label="Date" placeholder="Select Date" />
        </div>
      </div>
    </div>
  );
}