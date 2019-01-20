import React from 'react';
import Event from './Event';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import EventDetails from './EventDetails';

const MyEvents = props => {
  const events = [];
  props.eventsImHosting.forEach((event, i) => {
    const id = event.event_id;
    console.log(event);
    events.push(
      <Router key={`router${id}`}>
        <div>
          <Event id={i} key={`event${id}`} event={event} />
          <div>
            <Link className="detailsButton" key={`link${id}`} to="/details">
              Details
            </Link>

            <Route
              key={`route${id}`}
              path="/details"
              render={() => (
                <EventDetails key={`eventDetails${id}`} eventId={id} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  });

  return <div className="myEvents">{events}</div>;
};

export default MyEvents;
