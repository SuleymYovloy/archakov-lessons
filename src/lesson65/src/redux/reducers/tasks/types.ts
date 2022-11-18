export enum TasksTypes {
  SET_TASKS = 'SET_TASKS',
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
  COMPLETE_ALL = 'COMPLETE_ALL',
  CLEAR = 'CLEAR',
}

interface Task  {
  id: number;
  text: string;
  completed: boolean;
};

interface SetTasksAction {
  type: TasksTypes.SET_TASKS;
  payload: Task[];
}

interface AddTasksActon {
  type: TasksTypes.ADD_TASK;
  payload: {
    text: string;
    checked: boolean;
  };
}

interface DeleteTaskAction {
  type: TasksTypes.DELETE_TASK;
  payload: number;
}

interface ToggleCompleteAction {
  type: TasksTypes.TOGGLE_COMPLETE;
  payload: number;
}

interface CompleteAllAction {
  type: TasksTypes.COMPLETE_ALL;
  payload: boolean;
}

interface ClearAction {
  type: TasksTypes.CLEAR;
}

export type TasksActions = SetTasksAction | AddTasksActon | DeleteTaskAction | ToggleCompleteAction | CompleteAllAction | ClearAction;

export type TasksState = Task[];