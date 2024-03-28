const ContentTask = ({handleSetValue,disabled,name, id}) => {
  return (
    <>
      <div className="p-2">
        <input
          disabled={disabled}
          type="text"
          className="task-content text-lg "
          value={name}
          onChange={(e) => handleSetValue(e.target.value, id)}
        />
      </div>
    </>
  );
};


export default ContentTask
