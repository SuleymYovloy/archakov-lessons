// export const addTask = (text, checked) => ({
//   type: 'ADD_TASK',
//   payload: {
//     text,
//     checked
//   },
// });

// export const fetchTasks = () => async (dispatch) => {
//   const resp = await fetch('https://6363989337f2167d6f7d80a5.mockapi.io/tasks');
//   if (resp.ok) {
//     const data = await resp.json();
//     dispatch( {
//       type: 'SET_TASKS',
//       payload: data,
//     });
//   }
// };

// export const removeTask = (id) => ({
//   type: 'DELETE_TASK',
//   payload: id,
// });

// export const toggleComplete = (id) => ({
//   type: 'TOGGLE_COMPLETE',
//   payload: id,
// });

// export const completeAll = () => ({
//   type: 'COMPLETE_ALL',
// });

// export const clearAll = () => ({
//   type: 'CLEAR',
// });




export const addTask = (text, checked) => ({
  type: 'ADD_TASK',
  payload: {
    text,
    checked,
  },
});

export const fetchTasks = () => async (dispatch) => {
  const resp = await fetch('https://6363989337f2167d6f7d80a5.mockapi.io/tasks');
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: 'SET_TASKS',
      payload: data,
    });
  }
};

export const removeTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleComplete = (id) => ({
  type: 'TOGGLE_COMPLETE',
  payload: id,
});

export const completeAll = () => ({
  type: 'COMPLETE_ALL',
});

export const clearAll = () => ({
  type: 'CLEAR',
});
