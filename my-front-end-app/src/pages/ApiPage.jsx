import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default function ApiPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
                setLoading(false)
        })
        .catch(err => {
            setError('Failed to fetch posts')
            setLoading(false)
        })
    }, [])

    const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">API Data</h1>
            <input
                className="border p-2 w-full mb-4"
                placeholder="Search posts"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {filtered.map(post => (
                <Card key={post.id} title={post.title}>
                    <p>{post.body}</p>
                </Card>
        ))}
        </div>
    )
}
