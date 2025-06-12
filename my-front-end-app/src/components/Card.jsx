export default function Card({ title, children }) {
    return (
        <div className="bg-white p-4 shadow rounded border">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            {children}
        </div>
    )
}
