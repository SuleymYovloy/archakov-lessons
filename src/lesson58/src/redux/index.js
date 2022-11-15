import { legacy_createStore as createStore } from 'redux'; //Подключил createStore вместо configureStore


function reducer(state, action) {
  
  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: state.tasks[state.tasks.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked
        },
      ],
    };
  }

  if (action.type === 'DELETE_TASK') {
    return {
      ...state,
      tasks: state.tasks.filter((obj) => obj.id !== action.payload)
    };
  }

  if (action.type === 'TOGGLE_COMPLETE') {
    return {
      ...state,
      tasks: state.tasks.map((obj) => obj.id === action.payload ?
          {
            ...obj,
            completed: !obj.completed
          }
        : obj, 
      )
    };
  }

  if (action.type === 'COMPLETE_ALL') {
    return {
      ...state.tasks,
      tasks: state.tasks.map(obj => ({
        ...obj,
        completed: true,
      }))
    };
  }

  if (action.type === 'CLEAR') {
    return {
      ...state,
      tasks: []
    };
  }

  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBy: action.payload
    };
  }

  return state;
}


const store = createStore(reducer, {
  
  filterBy: 'all',
  tasks: [
    {
      id: 1,
      text: 'Первая задача',
      completed: false,
    },
  ],
});

export default store;