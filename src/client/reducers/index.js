import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';

export default combineReducers({
  events: eventsReducer,
  auth: authReducer
});
