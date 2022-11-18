import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {filterReducer} from './reducers/filter';
import {tasksReducer} from './reducers/tasks';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Обернул свой middleware(посредник), посредником redux-devtools

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;