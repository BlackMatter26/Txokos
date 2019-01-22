import React from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const SidePanel = props => {
    const panel = [];

    // panel.push(
    //     <EventDetails/>

    // );

    // for(/* loop through the list of ppl invited & food bringing, prob passed down via props*/){
    //     panel.push(
    //         <div className="attendeeName">Name</div>
    //         <div className="item">Item</div>
    //     );
    // };

    return <div className="sidePanel">{panel}</div>
}

export default SidePanel;