import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { loadEventsHosting } from './actions/actions';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(loadEventsHosting());

export default store;
