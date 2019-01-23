import React from 'react';
import Event from './Event';
import EventDetails from './EventDetails'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';
import { runInThisContext } from 'vm';

const SidePanelAttendee = props => {
    const panel = [];

    if (props.seeEventDetails) {
      panel.push(<this.props.listOfAttendees.dateTime />);
    }
    
    // console.log("EVERYONE RSVP'D: ", typeof props.listOfAttendees.rsvpd);
    // for(let i = 0; i < rsvpd.length; i++){
    //   panel.push(
    //     <div className = "attendee" key={i}>
    //       <div className="attendeeName">{rsvpd[i].name}</div>
    //       <div className="item">{rsvpd[i].food_name}</div>
    //     </div>
    //   );
    // };
          
    return <div className="sidePanelAttendee">{panel}</div>
}

export default SidePanelAttendee;