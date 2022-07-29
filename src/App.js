import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";
import "./components/css/header.css";
import "./components/css/TaskForm.css";
import "./components/css/card.css";

console.clear();

function App() {
  const [todoText, setTodoText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <TaskForm
        // FORM-Input
        todoText={todoText}
        setTodoText={setTodoText}
        // TASK-Array
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <TaskList taskList={taskList} />
      <Footer />
    </div>
  );
}

export default App;
