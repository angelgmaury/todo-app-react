import { TaskContext } from "../context/TasksContext";
import { useContext, useState } from "react";

export function TaskCard({ title, id }) {
  const iconCross = new URL("../assets/icon-cross.svg", import.meta.url).href;

  const iconCheck = new URL("../assets/icon-check.svg", import.meta.url).href;

  const { deleteTask, tasks, toggleTaskCheck } = useContext(TaskContext);
  const task = tasks.find((task) => task.id === id);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggle = () => {
    toggleTaskCheck(id);
  };

  return (
    <div>
      <div
        className={`card flex-wrap ${isHovered ? "hovered" : ""} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="borderS rounded-full w-6 h-6 flex justify-center items-center check">
          <input
            type="checkbox"
            id={id}
            className="image"
            onChange={handleToggle}
          />
          <label htmlFor={id} className="label">
            <figure className={task.isChecked ? "imageActive" : "image"}>
              <img src={iconCheck} width={14} height={14} />
            </figure>
          </label>
        </div>

        <div className="relative left-2 text overflow-x-hidden overflow-y-hidden tablet:left-0">
          <h1
            className={`font-light text-sm text-black relative top-0.5 ${
              task.isChecked ? "textCompleted" : null
            } tablet:text-base laptop:text-lg desktop:text-xl`}
          >
            {title}
          </h1>
        </div>

        <div>
          {isHovered && (
            <button onClick={() => deleteTask(id)} className="btn cross">
              <img src={iconCross} width={15} />
            </button>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
