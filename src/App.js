import { useState } from "react";
import ShowTasks from "./components/ShowTasks";

function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  return (
    <div>
      {tasks.map((task) => (
        <ShowTasks task={task} />
      ))}
    </div>
  );
}

export default App;
