import { create } from 'zustand'

const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, {
      id: Date.now(),
      title,
      completed: false
    }]
  })),

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),

  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),

  editTask: (id, newTitle) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    )
  })),
}))

export default useTaskStore