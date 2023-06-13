import React, { useEffect, useState } from "react";

export function ActiveTasks({
  handleClickTaskActive,
  allTasks,
  taskCompleted,
}) {
  const [colorActiv, setColorActiv] = useState("");

  useEffect(() => {
    if (taskCompleted || allTasks) {
      setColorActiv("desactiveColor");
    } else {
      setColorActiv("activeColor");
    }
  });

  return (
    <div className="activeTask">
      <button
        className={` text-base font-bold ${colorActiv}  desktop:text-lg`}
        onClick={handleClickTaskActive}
      >
        Active
      </button>
    </div>
  );
}
