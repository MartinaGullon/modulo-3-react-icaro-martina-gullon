import { useParams, Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import useTaskStore from '../store/taskStore'

const TaskDetail = () => {
  const { id } = useParams()
  const tasks = useTaskStore((state) => state.tasks)
  const task = tasks.find((t) => t.id === Number(id))

  if (!task) {
    return (
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Typography variant="h5">Tarea no encontrada.</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ marginTop: 2 }}>
          Volver al inicio
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 700, marginBottom: 2 }}>
        Detalle de la Tarea
      </Typography>
      <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, padding: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {task.title}
        </Typography>
        <Chip
          label={task.completed ? 'Completada' : 'Pendiente'}
          color={task.completed ? 'success' : 'warning'}
        />
      </Box>
      <Button component={Link} to="/" variant="contained" sx={{ marginTop: 3 }}>
        Volver al inicio
      </Button>
    </Container>
  )
}

export default TaskDetail