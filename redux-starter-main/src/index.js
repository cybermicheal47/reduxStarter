import store from "./store/configureStore";
// import { addTask, removeTask, completedTask } from "./store/tasks";
// import { addemployee } from "./store/Employee";
import axios from "axios";
import { getTasks } from "./store/tasks";

//calling api using function
const gettingTasks = async () => {
  //calling api
  try {
    const response = await axios.get("http://localhost:9001/api/tasks");
    console.log(response);
    //dispatching actions
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }
};
gettingTasks();

// store.dispatch(addTask({ task: "task1", completed: true }));
// store.dispatch(addTask({ task: "task2", completed: true }));
// // console.log(store.getState());

// store.dispatch(completedTask({ id: 1 }));
// // console.log(store.getState());

// store.dispatch(removeTask({ id: 1 }));
// // console.log(store.getState());

// store.dispatch(addemployee({ name: "harley" }));
// // console.log(store.getState());
// store.dispatch({ type: "SHOW_ERROR", payload: { error: "user not found" } });
