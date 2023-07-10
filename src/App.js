import { useState } from "react";
import ShowTasks from "./components/ShowTasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  return (
    <div className="mt-28">
      <AddTask />
      {tasks.map((task) => (
        <ShowTasks task={task} />
      ))}
    </div>
  );
}

export default App;
