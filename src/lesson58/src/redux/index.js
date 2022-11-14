import { configureStore } from '@reduxjs/toolkit'

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
        }
      ]
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

const store = configureStore({reducer}, {
  filterBy: 'all',

  tasks: [
    {
      id: 1,
      text: 'Первая задача',
      completed: false,
    },
    {
      id: 2,
      text: 'Проверил как работает отрисовка',
      completed: true
    },
    {
      id: 3,
      text: 'Проверил как работает отрисовка',
      completed: false
    },
    {
      id: 4,
      text: 'Проверил как работает отрисовка',
      completed: true
    }
  ],
});

export default store;