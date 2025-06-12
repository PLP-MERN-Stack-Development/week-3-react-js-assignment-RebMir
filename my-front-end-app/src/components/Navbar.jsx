import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div className="font-bold">MyApp</div>
        <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
        </div>
    </nav>
    )
}
