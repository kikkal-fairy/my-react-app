import React from 'react';

const BookingPage = () => (
  <div className="nhsuk-width-container">
    <main className="nhsuk-main-wrapper" id="maincontent">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Book an Appointment</h1>
          <form>
            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="name">
                Full Name
              </label>
              <input className="nhsuk-input" id="name" name="name" type="text" />
            </div>

            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="email">
                Email Address
              </label>
              <input className="nhsuk-input" id="email" name="email" type="email" />
            </div>

            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="phone">
                Phone Number
              </label>
              <input className="nhsuk-input" id="phone" name="phone" type="tel" />
            </div>

            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="date">
                Preferred Date
              </label>
              <input className="nhsuk-input" id="date" name="date" type="date" />
            </div>

            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="time">
                Preferred Time
              </label>
              <input className="nhsuk-input" id="time" name="time" type="time" />
            </div>

            <div className="nhsuk-form-group">
              <label className="nhsuk-label" htmlFor="notes">
                Additional Notes
              </label>
              <textarea className="nhsuk-textarea" id="notes" name="notes" rows="5"></textarea>
            </div>

            <button className="nhsuk-button" type="submit">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
);

export default BookingPage;