import { useState } from "react";
import TaskForm from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";
import { GrSun } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);


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

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <div className="container">
    <div className={isDarkMode ? "container dark" : "container"}>
      <h1>Todo List</h1>

      <button 
        className={`mode-toggle ${isDarkMode ? 'dark-active' : ''}`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div className="toggle-content">
          <div className="icon-container">
            {isDarkMode ? <FaMoon size={20} /> : <GrSun size={20} />}
          </div>
          <div className="text">
            {isDarkMode ? 'NIGHTMODE' : 'DAYMODE'}
          </div>
        </div>
      </button>
    
      <input
        type="text"
        placeholder="Search task..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <TaskForm onAdd={addTask} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <TaskList
        tasks={
        [...tasks]
        .filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
        .sort((a, b) => a.isDone - b.isDone)
      }
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      <footer>
        Made with React at <a href="https://www.lereacteur.io/?utm_source=google&utm_medium=cpc&utm_campaign=FR-SN-Brand&utm_term=le%20r%C3%A9acteur&utm_content=377851505166&gad_source=1&gad_campaignid=1695930647&gbraid=0AAAAADP5alZKMyHuOuTI1KKWg1L1awHgr&gclid=CjwKCAjwl_XBBhAUEiwAWK2hzttLXfZRp2jJqvV8pj_gWlS6j3Bs5Mlme02-8LgAxlt5Ewy-pVu5RRoCvcYQAvD_BwE">Le Reacteur</a> by <a href="https://github.com/nforn22">nforn22</a>
      </footer>
    </div>
  )
}

export default App
