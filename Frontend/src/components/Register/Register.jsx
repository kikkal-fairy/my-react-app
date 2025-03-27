import React from 'react';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;