import { nanoid } from "nanoid";

export default function AddTask({
  todoText,
  setTodoText,
  taskList,
  setTaskList,
}) {
  /**
   * FUNCTIONS
   */
  function submitHandler(event) {
    event.preventDefault();
    setTaskList([{ text: todoText, id: nanoid() }, ...taskList]);
    setTodoText("");
  }

  function handleChange(event) {
    setTodoText(event.target.value);
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <input
          value={todoText}
          onChange={handleChange}
          type="text"
          placeholder="new task..."
          required
        ></input>
        <button type="submit">add task</button>
        <button type="submit">clear</button>
      </form>
    </div>
  );
}
