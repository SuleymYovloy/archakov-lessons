import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import axios from 'axios';

import {filterReducer} from './reducers/filter';
import {tasksReducer} from './reducers/tasks';

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer
})

const log = (store) => (next) => (action) => {
  console.log('Выполнился экшн', store, action);

  if (action.type === 'ADD_TASK') {
    axios.post('https://6363989337f2167d6f7d80a5.mockapi.io/users', action.payload);
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  
  return next(action);
  
};

const store = createStore(rootReducer, applyMiddleware(thunk, log));

export default store;