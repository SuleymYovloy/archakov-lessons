import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Подключил Provider для компонента <App/>

import App from './App';
import store from './redux';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
