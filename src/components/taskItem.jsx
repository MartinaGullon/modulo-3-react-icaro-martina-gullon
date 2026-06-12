import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import InfoIcon from '@mui/icons-material/Info'
import useTaskStore from '../store/taskStore'
import styles from './taskItem.module.css'

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, editTask } = useTaskStore()
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(task.title)
  const navigate = useNavigate()

  const handleSave = () => {
    if (newTitle.trim() === '') return
    editTask(task.id, newTitle)
    setIsEditing(false)
  }

  return (
    <ListItem
      className={styles.taskItem}
      secondaryAction={
        <>
          <IconButton onClick={() => navigate(`/task/${task.id}`)}>
            <InfoIcon />
          </IconButton>
          {isEditing ? (
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton onClick={() => deleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          size="small"
          fullWidth
        />
      ) : (
        <ListItemText
          primary={task.title}
          className={task.completed ? styles.completedText : styles.normalText}
        />
      )}
    </ListItem>
  )
}

export default TaskItem