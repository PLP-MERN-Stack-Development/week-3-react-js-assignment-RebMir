export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b mb-6">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">My Tasks App</h1>
                <nav className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
                </nav>
            </div>
        </header>
    );
}
