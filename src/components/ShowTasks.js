import { AiFillDelete } from "react-icons/ai";

const ShowTasks = ({ task, id, deleteTask }) => {
  const date = new Date();
  console.log(date.toLocaleString());

  return (
    <div className="w-[90%] max-w-lg mx-auto flex items-center gap-4">
      <div className="flex items-center justify-between w-full  mb-4">
        <div className="flex items-center gap-4">
          <input type="checkbox" id="checkbox" />
          <div className="flex flex-col">
            <h1 className="font-semibold">{task}</h1>
            <p className="text-xs text-gray-600">{date.toLocaleString()}</p>
          </div>
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
