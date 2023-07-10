const ShowTasks = ({ task }) => {
  return (
    <div className="w-[90%] max-w-lg mx-auto flex items-center gap-4">
      <input type="checkbox" id="checkbox" />
      <h1>{task}</h1>
    </div>
  );
};
export default ShowTasks;
