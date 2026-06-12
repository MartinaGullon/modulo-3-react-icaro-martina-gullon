import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} className={styles.title}>
          📝 Lista de Tareas
        </Typography>
        <div className={styles.navButtons}>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar