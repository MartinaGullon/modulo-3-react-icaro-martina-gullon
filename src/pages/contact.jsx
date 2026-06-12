import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useState } from 'react'
import styles from './contact.module.css'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Contacto
      </Typography>
      <Typography variant="body1" className={styles.subtitle}>
        ¿Tenés alguna sugerencia o consulta? ¡Escribinos!
      </Typography>

      {sent ? (
        <Alert severity="success">
          ¡Mensaje enviado con éxito! Gracias por escribirnos 😊
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Mensaje"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={styles.submitButton}
          >
            Enviar
          </Button>
        </form>
      )}
    </Container>
  )
}

export default Contact