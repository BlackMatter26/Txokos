import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import App from './containers/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
