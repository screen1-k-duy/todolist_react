const Add = ({handleAdd}) => {
  return (
    <>
      <button
        className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
        onClick={handleAdd}
      >
        <svg
          className="h-6 w-6"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx={12} cy={12} r={9} />
          <line x1={9} y1={12} x2={15} y2={12} />
          <line x1={12} y1={9} x2={12} y2={15} />
        </svg>
        <span>Add</span>
      </button>
    </>
  );
};
export default Add;
