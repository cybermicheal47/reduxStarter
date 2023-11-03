import * as actionTypes from "./actionTypes";

export const addTask = (task, completed) => {
  return {
    type: actionTypes.Add_Task,
    payload: { task: task, completed: completed },
  };
};

export const removeTask = (id) => {
  return {
    type: actionTypes.Remove_Task,
    payload: { id: id },
  };
};

export const completedTask = (id) => {
  return { type: actionTypes.Task_Comp, payload: { id: id } };
};
