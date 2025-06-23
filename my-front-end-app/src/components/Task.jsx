export default function Task({ id, title, completed, onToggle, onDelete }) {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded shadow mb-2">
        {/* Left side: task title + checkbox */}
        <div className="flex items-center gap-3">
            <button
            onClick={() => onDelete(id)}
            className="text-red-500 text-2xl font-bold hover:text-red-700"
            title="Delete task"
            >
            &times;
            </button>
            <span className={completed ? "line-through text-gray-500" : ""}>
                {title}
            </span>
        </div>

        {/* Right side: Done/Undo button */}
        <button
            onClick={() => onToggle(id)}
            className={`px-3 py-1 rounded text-white ${
            completed ? "bg-red-500" : "bg-green-500"
            }`}
        >
            {completed ? "Undo" : "Done"}
        </button>
        </div>
    );
    }
    import React from "react";