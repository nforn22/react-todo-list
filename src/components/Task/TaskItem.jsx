import { MdDelete } from "react-icons/md";

function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li className="task-item">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.isDone ? "done" : ""}>{task.text}</span>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
            <MdDelete />
        </button>
      </li>
    );
  }
  
export default TaskItem;