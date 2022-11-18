import { TasksActions, TasksState, TasksTypes } from "./types";

const initialState: TasksState = [];

export function tasksReducer(state = initialState, action: TasksActions) {

  switch (action.type) {

    case TasksTypes.SET_TASKS:
      return action.payload;

    case TasksTypes.ADD_TASK:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked
        },
      ];

    case TasksTypes.DELETE_TASK:
      return state.filter((obj) => obj.id !== action.payload);

    case TasksTypes.TOGGLE_COMPLETE:
      return state.map((obj) => obj.id === action.payload ?
            {
              ...obj,
              completed: !obj.completed
            }
          : obj, 
        );
    
    case TasksTypes.COMPLETE_ALL:
      return state.map(obj => ({
          ...obj,
          completed: true,
        }));
    
    case TasksTypes.CLEAR:
      return  [];

    default:
      return state;
  }
  
}