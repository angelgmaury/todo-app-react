import { TaskContext } from "../context/TasksContext";
import { useContext, useState } from "react";

export function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
    });
    setTitle("");
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="flex justify-between pt-4 transition-all  items-center tablet:pt-2">
        <h1 className="text-2xl tracking-[12px] font-bold tablet:text-3xl tablet:tracking-[16px] laptop:text-4xl transition-all">
          TODO
        </h1>
        <p className="cursor-pointer">.</p>
      </div>
      <input
        className="placeholder:font-light text-black rounded-lg py-3 px-5 mt-4 text-sm tablet:text-base tablet:py-3.5 tablet:px-7 tablet:mt-3 laptop:text-lg laptop:mt-2 laptop:py-3 laptop:px-9
        desktop:mt-2.5 desktop:px-11 desktop:py-3 transition-all
        "
        type="text"
        placeholder="Write a new task and press Enter..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
