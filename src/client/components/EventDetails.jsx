import React from 'react';

const EventDetails = props => {
  // why does event.target.value not needed? Why does event not grab the buttons properties
  function grabInput(event) {
    return event.value;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="eventDetails">
      <form action={`/api/add_food/${props.eventId}`} method="post">
        <label htmlFor="foodName">Add Dish: </label>
        <input
          className="formInput"
          type="text"
          name="foodName"
          id="foodName"
          placeholder="pickles"
        />
        <button
          className="formButtons"
          type="submit"
          name="foodSubmit"
          onClick={grabInput}
        >
          Add
        </button>
      </form>

      <form action={`/api/add_invite/${props.eventId}`} method="post">
        <label htmlFor="email">Invite Guest: </label>
        <input
          className="formInput"
          type="text"
          name="email"
          id="email"
          placeholder="someone@gmail.com"
        />
        <button
          className="formButtons"
          type="submit"
          name="inviteSubmit"
          onClick={grabInput}
        >
          Invite
        </button>
      </form>
    </div>
  );
};

export default EventDetails;
