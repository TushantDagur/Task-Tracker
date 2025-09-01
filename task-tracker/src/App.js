import { useState } from "react"
import { BrowserRouter as Router, Route} from react-router-dom;
import Header from './components/header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Day 11 of D2d Healthcare Project',
        day: 'Aug 25th at 10pm',
        reminder: 'true'
      },
      {
        id: 2,
        text: 'Final commit of Task Tracker',
        day: 'Aug 26th at 1:30pm',
        reminder: 'true'
      },
      {
        id: 3,
        text: 'Shopping',
        day: 'Aug 24th at 11am',
        reminder: 'false'
      },
    ])

    // Add task
    const addTask =  (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
          task.id === id ? {...task, reminder:
            !task.reminder } : task
          )
        )
    }

  
  return (
    <div className="container">
        <Header title='Task Tracker' 
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        { tasks.length > 0 ? (
        <Tasks tasks= {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />
        ) : (
          'No Task To  Show'
        )}
        <Footer />
    </div>
  );
}

export default App;
