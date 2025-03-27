// import React from 'react';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" placeholder="Enter your email" />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" placeholder="Enter your password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Import useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Store JWT tokens in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);

      // Redirect to home page after successful login
      navigate('/');  // Navigate to Home page
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
