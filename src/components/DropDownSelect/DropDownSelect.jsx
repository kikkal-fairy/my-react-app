// src/components/DropDownSelect.jsx
import React, { useState, useEffect, useRef } from "react";
import arrowIcon from "../../assets/arrow_drop_down.svg";
import './DropDownSelect.css';


const DropDownSelect = ({
  label,
  placeholder,
  options,
  type = "dropdown",
  selectedValues = [],
  onChange = () => {},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMain, setSelectedMain] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const handleChecklistChange = (label) => {
    const updated = selectedValues.includes(label)
      ? selectedValues.filter((item) => item !== label)
      : [...selectedValues, label];
    onChange(updated);
  };

  const handleMainSelect = (option) => {
    setSelectedMain(option);
    setActiveDropdown(activeDropdown === option ? null : option);
  };

  const handleSubOptionSelect = (subOption) => {
    const updated = selectedValues.includes(subOption)
      ? selectedValues.filter((item) => item !== subOption)
      : [...selectedValues, subOption];
    onChange(updated);
  };

  const getDisplayValue = () => {
    if (type === "checklist") {
      return selectedValues?.length > 0 ? selectedValues.join(", ") : placeholder;
    }
    if (selectedMain) {
      return selectedMain.label;
    }
    return placeholder;
  };

  return (
    <div className="dropdown-select" ref={dropdownRef}>
      {label && <label className="dropdown-label">{label}</label>}

      <div className="dropdown-wrapper" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
        <div className="dropdown-box">{getDisplayValue()}</div>
        <div className="custom-arrow">
          <img src={arrowIcon} alt="Dropdown Arrow" />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {type === "checklist" ? (
            <div className="checklist-box">
              {options.map((option) => (
                <label key={option.label} className="sub-option">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.label)}
                    onChange={() => handleChecklistChange(option.label)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : (
            options.map((option) => (
              <div key={option.label} className="dropdown-item" onClick={() => handleMainSelect(option)}>
                <div className="main-option">
                  {option.label}
                  {option.subOptions && <span className="arrow">▶</span>}
                </div>

                {activeDropdown === option && option.subOptions && (
                  <div className="checklist-box">
                    {option.subOptions.map((sub, idx) => (
                      <label key={idx} className="sub-option">
                        <input
                          type="checkbox"
                          checked={selectedValues.includes(sub)}
                          onChange={() => handleSubOptionSelect(sub)}
                        />
                        {sub}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default DropDownSelect;
