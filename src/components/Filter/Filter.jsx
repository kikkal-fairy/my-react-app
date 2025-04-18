import React, { useState } from "react";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import SelectedTags from "../SelectedTags/SelectedTags";
import "./Filter.css";

export default function Filter() {
  const [selectedAudiences, setSelectedAudiences] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]); // ✅ Added: Activity state
  const [selectedDate, setSelectedDate] = useState(""); // ✅ Added: Date state


  const activityOptions = [
    {
      label: "Awareness, Inspiration & Aspiration",
      subOptions: [
        "Career Insight",
        "Workshop",
        "School Programme",
        "Skills Session",
        "Curriculum Development",
        "Other",
      ],
    },
    {
      label: "Skills Development & Preparation",
      subOptions: ["Interview Preparation", "CV Writing", "Mentorship"],
    },
    {
      label: "Work Experience",
      subOptions: [
        "Workplace Visit",
        "Work Taster",
        "Shadowing",
        "Work Experience(F2F)",
        "Volunteering",
        "Work Based Learning",
      ],
    },
    {
      label: "Influence the Influencer",
      subOptions: ["Educator CPD", "Industry Placements", "Parental Engagement"],
    },
  ];

  const audienceOptions = [
    { label: "Primary School" },
    { label: "Secondary School" },
    { label: "University Students" },
    { label: "Career Changers" },
  ];

  const locationOptions = [
    { label: "Edinburgh" },
    { label: "Glasgow" },
    { label: "Aberdeen" },
    { label: "Dundee" },
  ];

  const deliveryOptions = [
    { label: "In-Person" },
    { label: "Virtual" },
    { label: "Hybrid" },
  ];

  const groupSizeOptions = [
    { label: "Small (1–10 people)" },
    { label: "Medium (10–50 people)" },
    { label: "Large (50+ people)" },
  ];

  const eligibilityOptions = [
    { label: "No Restrictions" },
    { label: "School Pupils Only" },
    { label: "University Students Only" },
  ];

  const timeCommitmentOptions = [
    { label: "Less than 1 hour" },
    { label: "1–3 hours" },
    { label: "Full Day" },
  ];

  return (
    <div className="filter-container">
      <div className="filter-content">
        <h2 className="filter-title">Filter Your Search</h2>

        <div className="filter-item">
          <DropDownSelect
            label="Activity Type"
            placeholder="Select Activity Type"
            options={activityOptions}
            selectedValues={selectedActivities} // ✅ Added
            onChange={setSelectedActivities}    // ✅ Added
          />
        </div>

        <div className="filter-item">
          <DropDownSelect
            label="Audience Type"
            placeholder="Select Audience Type"
            options={audienceOptions}
            type="checklist"
            selectedValues={selectedAudiences}
            onChange={setSelectedAudiences}
          />
        </div>

        <SelectedTags
          // title="Audience Type"
          selectedItems={selectedAudiences}
          onRemoveItem={(item) =>
            setSelectedAudiences(selectedAudiences.filter((i) => i !== item))
          }
          onClearAll={() => setSelectedAudiences([])}
        />

        <div className="filter-item">
          <DropDownSelect
            label="Local Authority"
            placeholder="Select Local Authority"
            options={locationOptions}
          />
        </div>

        <div className="filter-item">
          <DropDownSelect
            label="Delivery Method"
            placeholder="Select Delivery Method"
            options={deliveryOptions}
          />
        </div>

        <div className="filter-item">
          <DropDownSelect
            label="Group Size"
            placeholder="Select Group Size"
            options={groupSizeOptions}
          />
        </div>

        <div className="filter-item">
          <DropDownSelect
            label="Eligibility Criteria"
            placeholder="Select Eligibility Criteria"
            options={eligibilityOptions}
          />
        </div>

        <div className="filter-item">
          <DropDownSelect
            label="Activity Duration"
            placeholder="Select Activity Duration"
            options={timeCommitmentOptions}
          />
        </div>

         {/* ✅ Added: Activity Date Picker with calendar icon */}
         <div className="filter-item date-picker-wrapper">
          <label className="dropdown-label">Activity Date</label>
          <div className="date-input-container">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-input"
            />
      
          </div>
        </div>
        {/* ✅ End of date picker */}
      </div>
    </div>
  );
}
