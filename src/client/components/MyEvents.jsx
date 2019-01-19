import React from 'react';
import Event from './Event';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import EventDetails from './EventDetails';

const MyEvents = props => {
  const events = [];
  props.eventsImHosting.forEach((event, i) => {
    const id = event.event_id;
    events.push(
      <Router>
        <div>
          <Event id={i} key={id} event={event} />
          <div>
            <button type="button" name="details">
              <Link to="/details">Details</Link>
            </button>
            <Route
              path="/details"
              render={() => <EventDetails eventId={id} />}
            />
          </div>
        </div>
      </Router>
    );
  });

  return <div>{events}</div>;
};

export default MyEvents;
