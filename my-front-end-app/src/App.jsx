import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TaskPage from './pages/TaskPage'
import ApiPage from './pages/ApiPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  )
}

export default App
