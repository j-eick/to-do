import { nanoid } from "nanoid";

export default function TaskList({ taskList }) {
  return (
    <ul className="card-container">
      {taskList.map((task) => {
        return (
          <li className="card" key={nanoid()}>
            <p>{task.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
