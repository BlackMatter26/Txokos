import React from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const SidePanel = props => {
    const panel = [];

    if( props.seeEventDetails){
      panel.push(
        <EventDetails/>

    );
    }
   
    console.log("List of Attendees ", props.listOfAttendees);
    for(let i = 0; i < props.listOfAttendees.length; i++){
        panel.push(
          <div className = "attendee" key={i}>
            <div className="attendeeName">{props.listOfAttendees[i].name}</div>
            <div className="item">{props.listOfAttendees[i].food_name}</div>
          </div>
            
        );
    };

    return <div className="sidePanel">{panel}</div>
}

export default SidePanel;