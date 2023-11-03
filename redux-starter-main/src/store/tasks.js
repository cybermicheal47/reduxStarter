import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    //action : function
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: action.payload.completed,
      });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});

// console.log(taskSlice);
export const { getTasks, addTask, removeTask, completedTask } =
  taskSlice.actions;
export default taskSlice.reducer;

//Action Types

// const Add_Task = "Add_Task";
// const Remove_Task = "Remove_Task";
// const Task_Comp = "Task_Comp";

// //ACTIONS

// export const addTask = createAction("ADD_TASK");
// export const removeTask = createAction("Remove_Task");
// export const completedTask = createAction("Task_Comp");

// console.log(addTask.type);

// export const addTask = (task, completed) => {
//   return {
//     type: Add_Task,
//     payload: { task: task, completed: completed },
//   };
// };

// export const removeTask = (id) => {
//   return {
//     type: Remove_Task,
//     payload: { id: id },
//   };
// };

// export const completedTask = (id) => {
//   return { type: Task_Comp, payload: { id: id } };
// };

//REDUCERS

// export default createReducer([], {
//   [addTask.type]: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: action.payload.completed,
//     });
//   },
//   [removeTask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
//   [completedTask.type]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index].completed = true;
//   },
// });

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: action.payload.completed,
//         },
//       ];

//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     case completedTask:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               completed: true,
//             }
//           : task
//       );
//     default:
//       return state;
//   }
// }
