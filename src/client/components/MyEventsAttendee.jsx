import React from 'react';
import Event from './Event';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import EventDetails from './EventDetails';

const MyEventsAttendee = props => {
  const events = [];
  props.eventsImInvitedTo.forEach((event, i) => {
    const id = event.event_id;
    events.push(
      <Router key={`router${id}`}>
        <div>
          <Event id={i} key={`event${id}`} event={event} />
          <div>
            <Link id={id} className="detailsButton" key={`link${id}`} to="/details" onClick={(event) =>{
              props.listAttendees(event); props.listFood(event);
            }}>
              Details 
            </Link>

            <Route
              key={`route${id}`}
              path="/details"
              // render={() => (
              //   <EventDetails key={`eventDetails${id}`} eventId={id} />
              // )}
            />
          </div>
        </div>
      </Router>
    );
  });

  return <div className="myEventsAttendee">{events}</div>;
};

export default MyEventsAttendee;
