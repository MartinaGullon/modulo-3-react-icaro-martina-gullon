import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import useTaskForm from '../hooks/useTaskForm'
import useTaskStore from '../store/taskStore'

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const { title, handleChange, handleSubmit } = useTaskForm(addTask)

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, marginBottom: 3 }}
    >
      <TextField
        label="Nueva tarea"
        variant="outlined"
        value={title}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar
      </Button>
    </Box>
  )
}

export default TaskForm