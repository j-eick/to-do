import { nanoid } from "nanoid";

export default function TaskList({ taskList }) {
  return (
    <ul className="card-container">
      {taskList.map((task) => {
        return (
          <li key={nanoid()} className="card">
            {task.text}
          </li>
        );
      })}
    </ul>
  );
}
