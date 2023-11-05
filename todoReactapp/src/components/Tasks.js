import React, { useEffect, useState } from "react";
import { loadTasks } from "../store/tasks";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

function Tasks() {
  //const taskslice = useSelector((state) => state.tasks);
  const { tasks, loading } = useSelector((state) => state.tasks); // destructuring the taskslice , when you want the ui to load it's component you use useSELECTOR
  const dispatch = useDispatch(); // same as store.dispatch
  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  // console.log(taskslice);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <p key={task.id}>{task.description} </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Tasks;
