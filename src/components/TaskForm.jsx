export default function AddTask() {
  return (
    <div className="form-container">
      <form className="form">
        <input type="text" placeholder="new task..."></input>
        <button type="submit">add task</button>
      </form>
    </div>
  );
}
