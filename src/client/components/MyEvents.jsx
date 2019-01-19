import React from 'react';
import Event from './Event';

const MyEvents = props => {
  const events = [];
  props.eventsImHosting.forEach((event, i) => {
    const id = event.id;
    events.push(<Event id={i} key={id} event={event} />);
  });

  return <div>{events}</div>;
};

export default MyEvents;
