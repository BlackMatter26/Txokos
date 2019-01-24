import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Prompt,
} from 'react-router-dom';
import { runInThisContext } from 'vm';
import EventDetails from './EventDetails';

const SidePanel = (props) => {
  const form = [];
  const invite = [];
  const rsvp = [];
  const food = [];

  if (props.seeEventDetails) {
    form.push(
      <EventDetails eventId={props.listOfAttendees.eventId} />,
    );
  }

  // console.log("EVERYONE INVITED: ", props.listOfAttendees);
  const invited = props.listOfAttendees.invited;
  const rsvpd = props.listOfAttendees.rsvpd;

  for (let i = 0; i < invited.length; i += 1) {
    invite.push(
      <div className="invitedAttendeeNotRsvp" key={`invited${i}`}>
        <div>{invited[i].name}</div>
      </div>,
    );
  }
  // console.log("EVERYONE RSVP'D: ", typeof props.listOfAttendees.rsvpd);
  for (let i = 0; i < rsvpd.length; i += 1) {
    rsvp.push(
      <div className="attendee" key={`rsvp${i}`}>
        <div className="attendeeName">{rsvpd[i].name}</div>
        <div className="item">{rsvpd[i].food_name}</div>
      </div>,
    );
  }

  for (let i = 0; i < props.listFood.length; i += 1) {
    food.push(
      <div className="listFood" key={`food${i}`}>
        <div>{props.listFood[i].food_name}</div>
      </div>,
    );
  }

  return (
    <div>
      <div className="listOfAttendees">
        <div className="invitedPanel">
          <h3>Invited</h3>
          {invite}
        </div>
        <div className="rsvpPanel">
          <h3>RSVP'd</h3>
          {rsvp}
        </div>
        <div className="foodPanel">
          <h3>Food List</h3>
          {food}
        </div>
      </div>
      <div className="sidePanel">{form}</div>
    </div>

  );
};

export default SidePanel;
