import React from "react";
import { useState } from "react";
import { addNewTask } from "../store/tasks";
import { useDispatch } from "react-redux";
const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask({ description: task }));
    setTask("");
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        name="task"
        placeholder="add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add Tasks</button>
    </form>
  );
};

export default AddTask;
