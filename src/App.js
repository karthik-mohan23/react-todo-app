import { useState } from "react";
import ShowTasks from "./components/ShowTasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="mt-28">
      <AddTask setTasks={setTasks} tasks={tasks} />
      {tasks.map((task, index) => (
        <ShowTasks task={task} key={index} />
      ))}
    </div>
  );
}

export default App;
