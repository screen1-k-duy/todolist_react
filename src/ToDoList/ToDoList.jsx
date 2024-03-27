import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Add from "./Add";
import Remove from "./Remove";
import Done from "./Done";
import { toast } from "react-toastify";
import Edit from "./Edit";

const ToDoList = () => {
  const notify = () => toast("Wow so easy!");

  //   get local data
  const getData = () => {
    const storedTask = JSON.parse(localStorage.getItem("tasks"));
    if (storedTask) {
      return storedTask;
    }
  };

  const [work, setWork] = useState("");
  const [tasks, setTasks] = useState(getData() || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // add task
  const handleAdd = () => {
    if (!work || !work.trim()) return;
    const newWork = {
      id: Math.random().toString(36).substring(7),
      name: work,
      checked: false,
    };
    setTasks([...tasks, newWork]);
    setWork("");
  };

  // remove task
  const handleRemove = (item) => {
    let newTask = tasks.filter((task) => task.id !== item);
    setTasks(newTask);
  };

  // edit
  const handleEdit = (item) => {
    let task = tasks.find((x) => x.id === item);
    console.log("name", task.name);
    setWork(task.name)
  };

  //   done
  const handleCheckboxClick = (item) => {
    const task = tasks.find((t) => t.id === item);
    task.checked = !task.checked;

    const isDone = tasks.includes(task);

    if (isDone) {
      setTasks([...tasks]);
    }
  };

  const handleReset = () => {
    setTasks([]);
  };

  const handleSetValue = (e,id) =>{
    const taskName = tasks.find((t)=>(t.id===id));
    console.log('dfsdfs',taskName.name);
    taskName.name = taskName.name;
    setTasks([...tasks])
  }
  const handleClearDone = () => {
    const taskDone = tasks.filter((task) => task.checked === false);
    if (taskDone.length > 1) {
      notify();
    }
    setTasks(taskDone);
  };


  return (
    <>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold">ToDo App</h1>
            <div className="mt-4 flex">
              <input
                className="w-80 border-b-2 border-gray-500 text-black px-2"
                type="text"
                value={work}
                onChange={(e) => setWork(e.target.value)}
                placeholder="Enter your task here"
              />
              <Add handleAdd={handleAdd} />
            </div>
          </div>
          <div className="mt-8">
            <ul>
              {tasks?.map((task, index) => (
                <li key={task.id} className="task-item p-2 rounded-lg">
                  <div className="flex align-middle flex-row justify-between">
                    <Done
                      handleCheckboxClick={handleCheckboxClick}
                      id={task.id}
                      checked={task.checked}
                    />
                    <div className="p-2">
                      <input  type="text" className="task-content text-lg " value={task.name} onChange={(e)=>handleSetValue(e,task.id)} />
                    </div>
                    <Edit handleEdit={handleEdit} id={task.id} />
                    <Remove handleRemove={handleRemove} id={task.id} />
                  </div>
                  <hr className="mt-2" />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <button
              onClick={handleClearDone}
              className="border-2 border-red-500 p-2 text-red-500"
            >
              Clear Completed Task
            </button>
            <button
              onClick={handleReset}
              className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
            >
              Reset Todo List
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
