// import React from 'react';

// const Register = () => {
//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" placeholder="Enter your name" />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" placeholder="Enter your email" />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" placeholder="Enter your password" />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Password validation (at least 8 characters, and contains both letters and numbers)
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  // Username validation (must be at least 3 characters long)
  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include both letters and numbers');
      return;
    }

    if (!validateUsername(username)) {
      setError('Username must be at least 3 characters long');
      return;
    }

    try {
      // Send POST request to register endpoint
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setSuccess('Registration successful');
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Error during registration');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
