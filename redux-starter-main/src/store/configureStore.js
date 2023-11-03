// import { legacy_createStore as createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
import employeeReducer from "./Employee";
import log from "./middleware/log";
import logger from "redux-logger";
import error from "./middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
