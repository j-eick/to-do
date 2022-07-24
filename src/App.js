import React, { useState } from "react";
import { nanoid } from "nanoid";
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
  const [taskList, setTaskList] = useState([
    {
      text: "clean the bathroom",
      key: nanoid(),
    },
    {
      text: "do the dishes",
      key: nanoid(),
    },
  ]);

  return (
    <div className="wrapper">
      <Header />
      <TaskForm />
      <TaskList taskList={taskList} />
      <Footer />
    </div>
  );
}

export default App;
