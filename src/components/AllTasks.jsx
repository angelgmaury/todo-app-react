import React, { useEffect, useState } from "react";

export function AllTasks({ taskCompleted, handleClickAllTask, taskActive }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (taskCompleted || taskActive) {
      setColor("desactiveColor");
    } else {
      setColor("activeColor");
    }
  });

  return (
    <div>
      <button
        className={` text-base font-bold ${color} desktop:text-lg`}
        onClick={handleClickAllTask}
      >
        All
      </button>
    </div>
  );
}
