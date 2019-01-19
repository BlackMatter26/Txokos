import * as types from '../constants/actionTypes';

export const createEvent = (dispatch, data) => {
  // TODO: FORMAT DATA AS NEEDED FOR POST
  const URL = '';
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response.json());
      response.json();
    })
    .then(json => {
      let newEvent = JSON.stringify(json);
      newEvent = JSON.parse(newEvent);
      dispatch({
        type: types.CREATE_EVENT,
        payload: newEvent
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addFood = (dispatch, data) => {
  // TODO: FORMAT DATA AS NEEDED FOR POST
  const URL = '';
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response.json());
      response.json();
    })
    .then(json => {
      let newFood = JSON.stringify(json);
      newFood = JSON.parse(newFood);
      dispatch({
        type: types.CREATE_EVENT,
        payload: newFood
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const loadEventsHosting = () => dispatch => {
  URL = '/api/events';
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // console.log(myJson);
      let events = JSON.stringify(myJson);
      events = JSON.parse(events);
      dispatch({
        type: types.LOAD_EVENTS_HOSTING,
        payload: events
      });
    });
};
