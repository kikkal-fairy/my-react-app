import React from 'react';

const LoginPage = () => (
  <div className="nhsuk-width-container">
    <main className="nhsuk-main-wrapper">
      <h1>Login Page</h1>
      <form>
        <div className="nhsuk-form-group">
          <label className="nhsuk-label" htmlFor="email">
            Email Address
          </label>
          <input className="nhsuk-input" id="email" name="email" type="email" />
        </div>

        <div className="nhsuk-form-group">
          <label className="nhsuk-label" htmlFor="password">
            Password
          </label>
          <input className="nhsuk-input" id="password" name="password" type="password" />
        </div>

        <button className="nhsuk-button" type="submit">
          Login
        </button>
      </form>
    </main>
  </div>
);

export default LoginPage;