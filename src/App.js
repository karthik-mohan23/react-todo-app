import { useState } from "react";
import ShowTasks from "./components/ShowTasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Todo", checked: false },
    { id: 2, task: "Done", checked: false },
  ]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      });
    });
  };

  return (
    <div className="mt-28">
      <AddTask setTasks={setTasks} tasks={tasks} />
      {tasks.map((task) => (
        <ShowTasks
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          id={task}
          handleCompleted={handleCompleted}
        />
      ))}
    </div>
  );
}

export default App;
