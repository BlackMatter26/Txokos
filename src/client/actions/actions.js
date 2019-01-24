import * as types from '../constants/actionTypes';

export const createEvent = data => (dispatch) => {
  // TODO: FORMAT DATA AS NEEDED FOR POST
  const URL = '/api/new_event/1';
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    // let newEvent = JSON.stringify(json);
    // newEvent = JSON.parse(newEvent);
    dispatch({
      type: types.CREATE_EVENT,
      payload: data,
    });
  })
    .catch((err) => {
      console.log(err);
    });
};

export const addFood = (dispatch, data) => {
  // TODO: FORMAT DATA AS NEEDED FOR POST
  const URL = '';
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response.json());
      response.json();
    })
    .then((json) => {
      let newFood = JSON.stringify(json);
      newFood = JSON.parse(newFood);
      dispatch({
        type: types.CREATE_EVENT,
        payload: newFood,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadEventsHosting = () => (dispatch) => {
  URL = '/api/events';
  fetch(URL)
    .then(response => response.json())
    .then((myJson) => {
      // console.log(myJson);
      let events = JSON.stringify(myJson);
      events = JSON.parse(events);
      dispatch({
        type: types.LOAD_EVENTS_HOSTING,
        payload: events,
      });
    });
};

export const loadEventsInvited = () => (dispatch) => {
  URL = '/api/attendee_invited_event/4';
  fetch(URL)
    .then(response => response.json())
    .then((myJson) => {
      dispatch({
        type: types.LOAD_EVENTS_INVITED,
        payload: myJson,
      });
    });
};

export const listAttendees = event => (dispatch) => {
  URL = `/api/invite_list/${event.target.id}`;
  fetch(URL)
    .then(response => response.json())
    .then((myJson) => {
      dispatch({
        type: types.VIEW_ATTENDEES,
        payload: myJson,
      });
    });
};

export const listFood = event => (dispatch) => {
  URL = `/api/food_list/${event.target.id}`;
  fetch(URL)
    .then(response => response.json())
    .then((myJson) => {
      dispatch({
        type: types.LIST_FOOD,
        payload: myJson,
      });
    });
};
export const fetchUser = () => (dispatch) => {
  URL = '/api/current_user';
  fetch(URL)
    .then(response =>
      response.json())
    .then((res) => {
      dispatch({
        type: types.FETCH_USER,
        payload: res || false,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
