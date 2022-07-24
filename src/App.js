import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState([
    {
      task: "clean the bathroom",
      key: nanoid(),
    },
  ]);

  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
