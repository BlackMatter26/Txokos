import * as types from '../constants/actionTypes';

export const createEvent = (data ,uid) => (dispatch) => {
  // TODO: FORMAT DATA AS NEEDED FOR POST
  console.log("MY USER ID" ,uid);
  const URL = `/api/new_event/${uid}`;
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
      console.log("ADD FOOD actiong",response.json());
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

export const loadEventsHosting = (user_id) => dispatch => {
  URL = `/api/event/${user_id}`;
  fetch(URL)
    .then(response => response.json())
    .then((myJson) => {
      console.log("LOAD EVENTS HOSTING",myJson);
      let events = JSON.stringify(myJson);
      events = JSON.parse(events);
      dispatch({
        type: types.LOAD_EVENTS_HOSTING,
        payload: events,
      });
    });
};

export const loadEventsInvited = (user_id) => dispatch => {
  URL = `/api/attendee_invited_event/${user_id}`;

  fetch(URL)
    .then(response => {
      return response.json()
    })
    .then((myJson) => {
      console.log("LOAD EVENTS INVITED ", myJson)

      dispatch({
        type: types.LOAD_EVENTS_INVITED,
        payload: myJson,
      });
    });
};

export const listAttendees = event => (dispatch) => {
  console.log("LIST THE ATTENDEES Y'AA::::");
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
      console.log("LIST FOOD ", myJson)
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
