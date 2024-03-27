import { useState } from "react";
import ToDoList from "./ToDoList/ToDoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToDoList />
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
