import { useState, createContext, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(
    data.map((task, index) => ({ ...task, isChecked: false, id: index }))
  );

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        isChecked: false,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function toggleTaskCheck(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isChecked: !task.isChecked,
          };
        }
        return task;
      })
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        deleteTask,
        toggleTaskCheck,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
