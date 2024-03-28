const ResetTasks = ({ handleReset }) => {
  return (
    <>
      <button
        onClick={handleReset}
        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
      >
        Reset Todo List
      </button>
    </>
  );
};

export default ResetTasks;
