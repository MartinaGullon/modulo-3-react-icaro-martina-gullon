import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import useTaskForm from '../hooks/useTaskForm'
import useTaskStore from '../store/taskStore'
import styles from './taskForm.module.css'

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const { title, handleChange, handleSubmit } = useTaskForm(addTask)

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        label="Nueva tarea"
        variant="outlined"
        value={title}
        onChange={handleChange}
        fullWidth
        className={styles.input}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.button}
      >
        Agregar
      </Button>
    </form>
  )
}

export default TaskForm