import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaskForm ({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return(
        <Card className="p-4 space-y-4">
            <form onSubmit={handleSubmit} className="flex mb-4">
                <input 
                    className="flex-1 p-2 border rounded-l"
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Add a task...."
                />
                <Button type="submit" className="rounded-r bg-green-500">
                    Add Task
                </Button>
            </form>
        </Card>
    )
}