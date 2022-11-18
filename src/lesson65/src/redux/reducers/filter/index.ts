import { FilterState, Actions } from "./types";

const initialState: FilterState = {
  filterBy: 'all'
}

export function filterReducer(state = initialState, action: Actions) {

  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBy: action.payload
    };
  }

  return state;
}