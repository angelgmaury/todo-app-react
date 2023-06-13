import { useContext, useState } from "react";
import { TaskContext } from "../context/TasksContext";
import { TaskCard } from "./TaskCard";

export function TaskFilter({ taskCompleted, allTasks, taskActive }) {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <div>
        {taskCompleted ? (
          <div>
            {tasks
              .filter((task) => task.isChecked)
              .map((task) => (
                <TaskCard key={task.id} title={task.title} id={task.id} />
              ))}
          </div>
        ) : null}
      </div>

      <div>
        {allTasks ? (
          <div>
            {tasks.map((task) => (
              <TaskCard key={task.id} title={task.title} id={task.id} />
            ))}
          </div>
        ) : null}
      </div>

      <div>
        {taskActive ? (
          <div>
            {tasks
              .filter((task) => task.isChecked === false)
              .map((task) => (
                <TaskCard key={task.id} title={task.title} id={task.id} />
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
