import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import initializeAuthentication from './Firebase/Firebase.init';
import './index.css';
import { store } from './redux/store';

// initialize firebase app
initializeAuthentication();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
