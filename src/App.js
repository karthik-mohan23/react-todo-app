import { useState } from "react";
import ShowTasks from "./components/ShowTasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task, index) => index !== id));
  };

  return (
    <div className="mt-28">
      <AddTask setTasks={setTasks} tasks={tasks} />
      {tasks.map((task, index) => (
        <ShowTasks key={index} task={task} deleteTask={deleteTask} id={index} />
      ))}
    </div>
  );
}

export default App;
