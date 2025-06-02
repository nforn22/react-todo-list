import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function TaskForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Add task <MdAddTask /></button>
    </form>
  );
}

export default TaskForm;
