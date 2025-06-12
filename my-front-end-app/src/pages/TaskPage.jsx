import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'

export default function TaskPage() {
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('all')

    const filteredTasks = tasks.filter(t =>
        filter === 'all' ? true :
        filter === 'active' ? !t.completed :
        t.completed
    )

    const addTask = () => {
        if (!newTask.trim()) return
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
        setNewTask('')
    }

    const toggleTask = id => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    }

    const deleteTask = id => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <div className="max-w-xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="New task" className="border p-2 w-full" />
            <Button onClick={addTask}>Add Task</Button>

            <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
                <Button variant="secondary" onClick={() => setFilter('active')}>Active</Button>
                <Button variant="secondary" onClick={() => setFilter('completed')}>Completed</Button>
            </div>

            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id} className="flex justify-between border-b p-2">
                        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                        <div className="space-x-2">
                            <Button variant="primary" onClick={() => toggleTask(task.id)}>✓</Button>
                            <Button variant="danger" onClick={() => deleteTask(task.id)}>✕</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}