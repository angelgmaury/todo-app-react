import { TaskForm } from "./components/TaskForm";
import { CounterItems } from "./components/CounterItems";
import { ClearCompleted } from "./components/ClearCompleted";
import { TaskFilter } from "./components/TaskFilter";
import { Completed } from "./components/Completed";
import { AllTasks } from "./components/AllTasks";
import { ActiveTasks } from "./components/ActiveTasks";
import { useContext, useState } from "react";
import { TaskContext } from "./context/TasksContext";
function App() {
  const { tasks } = useContext(TaskContext);

  const [taskCompleted, setTaskCompleted] = useState(false);

  const [allTasks, setAllTasks] = useState(true);

  const [taskActive, setTaskActive] = useState(false);

  const handleClickCompleted = () => {
    setTaskCompleted(true);
    setAllTasks(false);
    setTaskActive(false);
  };
  const handleClickAllTask = () => {
    setAllTasks(true);
    setTaskCompleted(false);
    setTaskActive(false);
  };

  const handleClickTaskActive = () => {
    setTaskActive(true);
    setTaskCompleted(false);
    setAllTasks(false);
  };

  return (
    <>
      <main className="main">
        <TaskForm />
        <div className="bg-white overflow-y-auto overflow-x-hidden rounded-md flex-wrap tasklist">
          <TaskFilter
            taskCompleted={taskCompleted}
            taskActive={taskActive}
            allTasks={allTasks}
          />
        </div>

        <div className="taskSort">
          <AllTasks
            taskCompleted={taskCompleted}
            taskActive={taskActive}
            handleClickAllTask={handleClickAllTask}
            tasks={tasks}
          />
          <ActiveTasks
            taskCompleted={taskCompleted}
            allTasks={allTasks}
            handleClickTaskActive={handleClickTaskActive}
            tasks={tasks}
          />
          <Completed
            taskActive={taskActive}
            allTasks={allTasks}
            handleClickCompleted={handleClickCompleted}
            tasks={tasks}
          />
        </div>
        <CounterItems />
        <ClearCompleted />
      </main>
    </>
  );
}

export default App;
