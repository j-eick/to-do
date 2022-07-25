import { nanoid } from "nanoid";

export default function AddTask({
  inputValue,
  setInputValue,
  taskList,
  setTaskList,
}) {
  /**
   * FUNCTIONS
   */
  function submitHandler(event) {
    event.preventDefault();
    setTaskList([{ text: inputValue, id: nanoid() }, ...taskList]);
    setInputValue("");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <input
          required
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="new task..."
        ></input>
        <button type="submit">add task</button>
      </form>
    </div>
  );
}
