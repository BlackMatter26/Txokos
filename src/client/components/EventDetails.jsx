import React from 'react';

const EventDetails = props => {
  return (
    <div className="eventDetails">
      <form action={`/add_food/${props.eventId}`} method="post">
        <label htmlFor="foodSubmit">Add Dish:</label>
        <input id="foodSubmit" />
        <button type="button" name="foodSubmit">
          Submit
        </button>
      </form>

      <form action={`/add_invite/${props.eventId}`} method="post">
        <label htmlFor="inviteSubmit">Invite Guest:</label>
        <input id="inviteSubmit" />
        <button type="button" name="inviteSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventDetails;
