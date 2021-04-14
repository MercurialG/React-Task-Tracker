import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Buy cheese',
            day:'April 20 at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text: 'Buy dog food',
            day: 'April 21 at 1:30pm',
            reminder: true,
        },
        {
            id:3,
            text: 'Buy cookies',
            day: 'April 20 at 6:37am',
            reminder: true,
        }
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}/> : ('No Tasks To Show')}
    </div>
  );
}

export default App;
