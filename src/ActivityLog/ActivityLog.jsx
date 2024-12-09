import { useState } from "react";
import './styles.css';

const ActivityLog = () => {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewtasks] = useState("");

  return (
    <div className="app-container">
      <h1 className="heading">TODO LIST</h1>
      <div className="input-container">
        <input
          className="addtext"
          type="text"
          placeholder="Enter Your Task"
          value={newtasks}
          onChange={(event) => setNewtasks(event.target.value)}
        />
        <button
          className="submit-button"
          onClick={() => {
            if (newtasks.trim()) {
              const newTask = {
                id: Date.now(),  // Use Date.now() to generate a unique id
                label: newtasks.trim(),
              };
              setTasks([...tasks, newTask]);
              setNewtasks("");
            }
          }}
        >
          Submit
        </button>
      </div>
      <ul className="task-list">
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button
              onClick={() => {
                setTasks(tasks.filter((task) => task.id !== id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="reset-button"
        onClick={() => {
          setTasks([]);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ActivityLog;
