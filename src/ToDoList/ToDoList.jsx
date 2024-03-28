import { useEffect, useState } from "react";
import Add from "./Add";
import Remove from "./Remove";
import Done from "./Done";
import { toast } from "react-toastify";
import Edit from "./Edit";
import Update from "./Update";
import ClearCompleted from "./ClearCompleted";
import ResetTasks from "./ResetTasks";
import ContentTask from "./ContentTask";

//   get local data
const getData = () => {
  const storedTask = JSON.parse(localStorage.getItem("tasks"));
  if (storedTask) {
    return storedTask;
  }
};

const ToDoList = () => {
  const notify = () => toast("Waiting....Clear Completed Task");

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
      disabled: true,
      showEdit: true,
      showUpdate: false,
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
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        return t.id === item
          ? { ...t, disabled: false, showEdit: false, showUpdate: true }
          : t;
      });
    });
  };

  const handleSetValue = (e, id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id === id ? { ...task, name: e } : task;
      });
    });
  };

  const handleUpdate = (item) => {
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        return t.id === item
          ? { ...t, disabled: true, showEdit: true, showUpdate: false }
          : t;
      });
    });
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

  const handleClearDone = () => {
    const taskNotDone = tasks.filter((task) => task.checked === false);
    const taskDone = tasks.filter((task) => task.checked === true);
    if (taskDone.length > 1) {
      notify();
    }
    setTasks(taskNotDone);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-100 pt-8">
        <div className="bg-white p-3 max-w-xl mx-auto">
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
                    <ContentTask
                      handleSetValue={handleSetValue}
                      id={task.id}
                      name={task.name}
                    />
                    <Update
                      showUpdate={task.showUpdate}
                      handleUpdate={handleUpdate}
                      id={task.id}
                    />
                    <Edit
                      showEdit={task.showEdit}
                      handleEdit={handleEdit}
                      id={task.id}
                    />
                    <Remove handleRemove={handleRemove} id={task.id} />
                  </div>
                  <hr className="mt-2" />
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <ClearCompleted handleClearDone={handleClearDone} />
            <ResetTasks handleReset={handleReset} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
