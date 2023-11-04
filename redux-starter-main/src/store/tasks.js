import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http";
let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    //action : function
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: action.payload.completed,
      });
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].completed = true;
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },

    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
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
