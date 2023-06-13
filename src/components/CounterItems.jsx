import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TasksContext";
export function CounterItems() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="counterItems bg-white">
      <p className="text-DarkGrayishBlue text-sm tablet:text-base transition-all">
        {tasks.length} Items Left
      </p>
    </div>
  );
}
