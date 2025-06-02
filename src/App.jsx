import { useState } from "react";
import TaskForm from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <footer>
        Made with React at <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20r%C3%A9acteur&utm_content=377851505166&gad_source=1&gad_campaignid=1695930647&gbraid=0AAAAADP5alZKMyHuOuTI1KKWg1L1awHgr&gclid=CjwKCAjwl_XBBhAUEiwAWK2hzttLXfZRp2jJqvV8pj_gWlS6j3Bs5Mlme02-8LgAxlt5Ewy-pVu5RRoCvcYQAvD_BwE">Le Reacteur</a> by <a href="https://github.com/nforn22">nforn22</a>
      </footer>
    </div>
  )
}

export default App
