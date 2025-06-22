export default function Task( { id, title, completed, onToggle } ) {  
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded shadow mb-2">
            <span className={completed ? "line-through text-gray-500" : "" }>
                {title}
            </span>
            <button
                onClick={() => onToggle(id)}
                className={`px-3 py-1 rounded text-white ${
                completed ? "bg-red-500" : "bg-green-500"}`}>
            {completed ? "Undo" : "Done"}
            </button>
        </div>
    );
}