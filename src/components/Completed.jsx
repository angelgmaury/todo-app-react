import { useEffect, useState } from "react";

export function Completed({ handleClickCompleted, allTasks, taskActive }) {
  const [colorCompleted, setColorCompleted] = useState("");

  useEffect(() => {
    if (allTasks || taskActive) {
      setColorCompleted("desactiveColor");
    } else {
      setColorCompleted("activeColor");
    }
  });

  return (
    <div>
      <button
        className={` text-base font-bold ${colorCompleted}  desktop:text-lg`}
        onClick={handleClickCompleted}
      >
        Completed
      </button>
    </div>
  );
}
