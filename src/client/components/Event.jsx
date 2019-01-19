import React from 'react';

const Event = props => {
  return (
    <div className="eventCard">
      <h3>{props.event.event_name}</h3>
      <label htmlFor="host">Host:</label>
      <span id="host"> {props.event.name}</span>
      <br />
      <label htmlFor="location">Location:</label>
      <span id="location"> {props.event.location}</span>
      <br />
      {/* <label htmlFor="event-date">Event Date:</label>
      <span id="event-date"> {props.event.date}</span> */}
      <br />
      <label htmlFor="time">Time:</label>
      <span id="time"> {props.event.time}</span>
      <br />

    </div>
  );
};

export default Event;
