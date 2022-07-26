import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import TestUseEffect from "./components/TestUseEffect";
import "./App.css";
import "./components/css/header.css";
import "./components/css/TaskForm.css";
import "./components/css/card.css";

console.clear();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <TaskForm
        // FORM-Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        // TASK-Array
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList taskList={taskList} />
      <TestUseEffect />
      <Footer />
    </div>
  );
}

export default App;
