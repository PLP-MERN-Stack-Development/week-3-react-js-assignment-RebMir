import { useState, useEffect} from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, title: "Learn React", completed: false },
            { id: 2, title: "Build a Todo App", completed: false },
            { id: 3, title: "Deploy to Vercel", completed: false }
        ];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleTask = (id) => {
      setTasks(curr => 
        curr.map(t => 
          t.id === id 
            ? { ...t, completed: !t.completed } 
            : t
        )
      );
    };

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            completed: false
        };
        setTasks(curr => [newTask, ...curr]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <Navbar /> {/* Navbar component */}

          <main className="flex-grow p-6 container mx-auto">
            <h1 className="text-3xl font-bold mb-4">My Tasks</h1>

            <TaskForm onAdd={addTask} />

            {tasks.length ?(
              tasks.map(task => (
                <Task key={task.id} {...task} onToggle={toggleTask} />
            ))
            ) : (
                <p className="text-gray-500">No tasks yet</p>
            )}
          </main>

          <Footer /> {/*Footer component */}
        </div>
    );
}