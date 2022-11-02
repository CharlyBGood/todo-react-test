import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={newTaskName}
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Save task</button>
    </form>
  );
};
