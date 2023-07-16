import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      return;
    }
    setTasks([
      ...tasks,
      { id: Date.now(), task: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <div className="w-[90%] max-w-lg mx-auto mb-10">
      <div className="flex justify-between items-center mb-8">
        <p className="text-xl font-semibold">
          {tasks.length > 1 ? `${tasks.length} tasks` : `${tasks.length} task`}
        </p>
        <button
          onClick={() => setTasks([])}
          className="bg-red-500 text-white py-1 px-3 rounded-md">
          Clear all
        </button>
      </div>
      <form onSubmit={handleAddTask} className="flex items-center gap-4 w-full">
        <input
          type="text"
          placeholder="Add task"
          className="border border-gray-400 rounded-md w-full px-3 h-10 focus:outline-blue-400"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">
          ADD
        </button>
      </form>
    </div>
  );
};
export default AddTask;
