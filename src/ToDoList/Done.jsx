const Done = ({ handleCheckboxClick, id, checked }) => {
  return (
    <>
      <div className="p-2">
        <input
          type="checkbox"
          checked={checked}
          className="h-6 w-6 "
          onChange={() => handleCheckboxClick(id)}
        />
      </div>
    </>
  );
};

export default Done;
