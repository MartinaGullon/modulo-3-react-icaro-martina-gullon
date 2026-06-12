import { useState } from 'react'

const useTaskForm = (addTask) => {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') return
    addTask(title)
    setTitle('')
  }

  return { title, handleChange, handleSubmit }
}

export default useTaskForm