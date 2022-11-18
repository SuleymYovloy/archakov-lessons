
import { Dispatch } from "redux";
import { TasksActions, TasksTypes } from "../reducers/tasks/types";

export const addTask = (text: string, checked: boolean) => ({
  type: TasksTypes.ADD_TASK,
  payload: {
    text,
    checked,
  },
});

export const fetchTasks: any = () => async (dispatch: Dispatch<TasksActions>) => {
  const resp = await fetch('https://61ba2ba348df2f0017e5a968.mockapi.io/tasks');
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: TasksTypes.SET_TASKS,
      payload: data,
    });
  }
};

export const removeTask = (id: number) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleComplete = (id: number) => ({
  type: 'TOGGLE_COMPLETE',
  payload: id,
});

export const completeAll = () => ({
  type: 'COMPLETE_ALL',
});

export const clearAll = () => ({
  type: 'CLEAR',
});
