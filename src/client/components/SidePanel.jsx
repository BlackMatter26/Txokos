import React from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import { runInThisContext } from 'vm';

const SidePanel = props => {
    const panel = [];

    if (props.seeEventDetails){
      panel.push(
        <EventDetails/>
      );
    };
   
    // console.log("EVERYONE INVITED: ", props.listOfAttendees);
    let invited = props.listOfAttendees.invited;
    let rsvpd = props.listOfAttendees.rsvpd;
    for(let i = 0; i < invited.length; i++){
      panel.push(
        <div className = "attendee" key={i}>
          <div className="attendeeName">{invited[i].name}</div>
        </div>
      );
    };
    // console.log("EVERYONE RSVP'D: ", typeof props.listOfAttendees.rsvpd);
    for(let i = 0; i < rsvpd.length; i++){
      panel.push(
        <div className = "attendee" key={i}>
          <div className="attendeeName">{rsvpd[i].name}</div>
          <div className="item">{rsvpd[i].food_name}</div>
        </div>
      );
    };
          
    return <div className="sidePanel">{panel}</div>
}

export default SidePanel;