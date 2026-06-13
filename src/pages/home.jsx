import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import TaskForm from '../components/taskForm'
import TaskItem from '../components/taskItem'
import useTaskStore from '../store/taskStore'
import styles from './home.module.css'

const Home = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.text)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <Container maxWidth="md" className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Mis Tareas
      </Typography>

      <Box className={styles.quoteBox}>
        {loading && <CircularProgress size={20} />}
        {error && <Alert severity="error">No se pudo cargar el dato curioso.</Alert>}
        {!loading && !error && (
          <Alert severity="info">💡 Dato curioso del día: {quote}</Alert>
        )}
      </Box>

      <TaskForm />

      {tasks.length === 0 ? (
        <Typography variant="body1" className={styles.emptyText}>
          No hay tareas todavía. ¡Agregá una!
        </Typography>
      ) : (
        <List>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </Container>
  )
}

export default Home