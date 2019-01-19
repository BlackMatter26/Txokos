import React from 'react';

const EventDetails = props => {
  return (
    <div className="eventDetails">
        <form action='/' method="post">
          <label htmlFor="foodSubmit">Add Dish:</label>
          <input id="foodSubmit"></input>
          <button type="submit" name="foodSubmit" >Submit</button>
        </form>
        
        <form action='/' method="post">
          <label htmlFor="inviteSubmit">Invite Guest:</label>
          <input id="inviteSubmit"></input>
          <button type="submit" name="inviteSubmit" >Submit</button>
        </form>
    </div>
  );
};

export default EventDetails;
