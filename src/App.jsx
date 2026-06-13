import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import TaskDetail from './pages/TaskDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App