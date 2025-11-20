import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h1>To-Do App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px"
        }}
      />

      <button onClick={addTask}>Add Task</button>

      <ul style={{ marginTop: "20px", textAlign: "left" }}>
        {tasks.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: "10px",
                color: "white",
                background: "red",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
