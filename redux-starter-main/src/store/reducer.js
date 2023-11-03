import * as actionTypes from "./actionTypes";

let id = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.Add_Task:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: action.payload.completed,
        },
      ];

    case actionTypes.Remove_Task:
      return state.filter((task) => task.id !== action.payload.id);

    case actionTypes.Task_Comp:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );
    default:
      return state;
  }

  // if (action.type === "Add_Task")
  //   return [
  //     ...state,
  //     {
  //       id: ++id,
  //       task: action.payload.task,
  //       completed: false,
  //     },
  //   ];
  // else if (action.type === "Remove_Task") {
  //   return state.filter((task) => task.id !== action.payload.id);
  // }

  return state;
}
