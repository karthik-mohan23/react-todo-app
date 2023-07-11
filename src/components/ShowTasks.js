import { AiFillDelete } from "react-icons/ai";

const ShowTasks = ({ task, id, deleteTask }) => {
  return (
    <div className="w-[90%] max-w-lg mx-auto flex items-center gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <input type="checkbox" id="checkbox" />
          <h1>{task}</h1>
        </div>

        <AiFillDelete
          onClick={() => deleteTask(id)}
          className="text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default ShowTasks;
