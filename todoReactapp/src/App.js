import React from "react";
import Tasks from "./components/Tasks";
import store from "./store/configureStore";

import { Provider } from "react-redux";
import AddTask from "./components/AddTask";
const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
