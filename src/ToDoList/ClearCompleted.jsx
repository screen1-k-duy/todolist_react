const ClearCompleted = ({handleClearDone}) => {
  return (
    <>
      <button
        onClick={handleClearDone}
        className="border-2 border-red-500 p-2 text-red-500"
      >
        Clear Completed Task
      </button>
    </>
  );
};

export default ClearCompleted;
