import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {filterReducer} from './reducers/filter';
import {tasksReducer} from './reducers/tasks';

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;