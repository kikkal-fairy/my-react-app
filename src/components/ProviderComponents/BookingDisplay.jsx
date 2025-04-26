import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '/src/components/ProviderComponents/samplecalendardata.jsx';

const BookingDisplay = () => {
  
  const localizer = momentLocalizer(moment)

  return (
    <div className="calendar-container">
      <Calendar localizer = {localizer} events = {events}
      className="calendar"
      startAccessor="start" endAccessor="end"
      style={{height: "40vh", margin: "15px"}}
      toolbar={false}
      showAllEvents/>
    </div>
  )}

export default BookingDisplay;