import React, { useState } from 'react';
import './UserRoleSwitch.css';
import PersonIcon from '../../assets/person.svg';
import SchoolIcon from '../../assets/school.svg';

const UserRoleSwitch = ({ onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState('individual');

  const handleSelect = (role) => {
    setSelectedRole(role);
    if (onRoleChange) onRoleChange(role);
  };

  return (
    <div className="user-role-switch">
      <h3 className="switch-title">Activities For</h3>
      <div className="role-options">
        {/* Individual */}
        <div
          className={`role-card ${selectedRole === 'individual' ? 'active' : ''}`}
          onClick={() => handleSelect('individual')}
        >
          <div className={`icon-wrapper ${selectedRole === 'individual' ? 'active' : ''}`}>
            <img 
              src={PersonIcon} 
              alt="Individual" 
              className={`role-icon ${selectedRole === 'individual' ? 'active' : ''}`} 
            />
          </div>
          <p className="role-label">Individual</p>
        </div>

        {/* Career Adviser */}
        <div
          className={`role-card ${selectedRole === 'adviser' ? 'active' : ''}`}
          onClick={() => handleSelect('adviser')}
        >
          <div className={`icon-wrapper ${selectedRole === 'adviser' ? 'active' : ''}`}>
            <img 
              src={SchoolIcon} 
              alt="Career Adviser" 
              className={`role-icon ${selectedRole === 'adviser' ? 'active' : ''}`} 
            />
          </div>
          <p className="role-label">Career Adviser</p>
        </div>
      </div>
    </div>
  );
};

export default UserRoleSwitch;