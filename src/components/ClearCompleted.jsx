import React, { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export function ClearCompleted() {
  const { tasks, setTasks } = useContext(TaskContext);

  function clearTasksCompleted() {
    const updatedTasks = tasks.filter((task) => !task.isChecked);
    setTasks(updatedTasks);
  }

  return (
    <div className="clearItems bg-white">
      <button
        className="text-DarkGrayishBlue hover:text-VeryDarkGrayishBlue text-sm tablet:text-base transition-all "
        onClick={clearTasksCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}
