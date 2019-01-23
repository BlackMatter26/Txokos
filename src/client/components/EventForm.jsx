import React from 'react';

const EventForm = (props) => (
        <div className="eventDetails">
            <label htmlFor="eventName">Event Name: </label>
            <input
                id="eventName"
                type="text"
                name="eventName"
                placeholder="Taste of Korea"
                onChange={props.handleChange}
            />
            <label htmlFor="location">Location: </label>
            <input
                id="location"
                type="text"
                name="location"
                placeholder="Pasedena"
                onChange={props.handleChange}

            />
            <label htmlFor="eventTime">Time: </label>
            <input
                id="eventTime"
                type="text"
                name="eventTime"
                placeholder="12:00AM"
                onChange={props.handleChange}

            />
            <label htmlFor="maxAttend">Max Attend: </label>
            <input
                id="maxAttend"
                type="text"
                name="maxAttend"
                placeholder="30"
                onChange={props.handleChange}

            />

            <button
                id="formButtons"
                type="submit"
                name="foodSubmit"
                onClick={props.handleClick}
            >
                Create Event
        </button>
        </div>
    );

export default EventForm;
