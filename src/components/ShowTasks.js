import { AiFillDelete } from "react-icons/ai";

const ShowTasks = ({ task, deleteTask, handleCompleted }) => {
  console.log(task);
  const date = new Date();
  return (
    <div className="w-[90%] max-w-lg mx-auto flex items-center gap-4">
      <div className="flex items-center justify-between w-full  mb-4">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => handleChecked(task.id)}
            value={task.completed}
          />
          <div className="flex flex-col">
            {task.checked ? (
              <del>
                <h1 className="font-semibold">{task.task}</h1>
              </del>
            ) : (
              <h1 className="font-semibold">{task.task}</h1>
            )}

            <p className="text-xs text-gray-600">{date.toLocaleString()}</p>
          </div>
        </div>

        <AiFillDelete
          onClick={() => deleteTask(task.id)}
          className="text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default ShowTasks;
