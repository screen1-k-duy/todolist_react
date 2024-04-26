import { useState } from "react";
import ToDoList from "./ToDoList/ToDoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {firestore} from './firebase'
import { addDoc, collection } from "firebase/firestore";

function App() {
  const ref =collection(firestore, 'mess')
  console.log('firestore',firestore);
  console.log('ref', ref);
  return (
    <>
      <ToDoList />
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
