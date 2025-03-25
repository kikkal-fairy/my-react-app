// components/FormGroup.jsx
import React from 'react';

const FormGroup = ({ label, children }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="form-content">{children}</div>
    </div>
  );
};

export default FormGroup;
