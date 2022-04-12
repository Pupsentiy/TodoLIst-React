import React, { useState } from 'react'
import { useStyles } from './assets/styles/styles';
import { TextField, Box, Button, Typography, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Checkbox from "@mui/material/Checkbox";
import { v4 as uuidv4 } from 'uuid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const classes = useStyles();
  const [title, setInput] = useState('')
  const [todo, setTodos] = useState([]);
  const [editButton, setEditButton] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const addTask = () => {
    const item = {
      title: title,
      id: uuidv4(),
      checked: false,
      subItem: []
    }
    if (title === "") return;

    setTodos((prevState) => [item, ...prevState])
    setInput('')
  }

  const remove = (id) => {
    const newArr = todo.filter(title => title.id !== id)
    setTodos(newArr)
  };

  const onEdit = (id, title) => {
    setEditButton(id)
    setEditTitle(title)
  }

  const saveTodo = (id) => {
    todo.map(item => {
      if (item.id === id) {
        item.title = editTitle
      }
      return item.title
    })
      setEditButton(false)
  }

  const chekBox = (id, index) => {
    todo.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked
        if (item.checked) {
          const arr = todo.splice(index, 1).pop()
          setTodos(prevState => [...prevState, arr])
        } else {
          const arr2 = todo.splice(index, 1).pop()
          setTodos(prevState => [arr2, ...prevState])
        }
      }
    })
  };

  const upTask = (key) => {
    // if (key === 0) return;
    const index = key - 1;
    console.log('index', index);
    const itemAbove = todo[index];
    console.log('itemAbove', itemAbove);
    todo[key - 1] = todo[key];
    console.log('todo[key - 1]',todo[key - 1]);
    todo[key] = itemAbove;
    console.log('todo[key]',todo[key]);
    setTodos([...todo]);
  }

  const DownTask = (key) => {
    // if (key === items.length - 1) return;
    const index = key + 1;
    const itemBelow = todo[index];
    todo[key + 1] = todo[key];
    todo[key] = itemBelow;
    setTodos([...todo]);
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.block__form}>
        <TextField 
        label="Text" 
        value={title} 
        variant="outlined" 
        onChange={event => setInput(event.target.value)} 
        fullWidth 
        InputProps={{ classes: { root: classes.form } }} />
        <Button onClick={addTask} ><AddIcon className={classes.colorIcon} /></Button>
      </Box>
      <Box className={classes.block__task}>
        {
          todo.map((item, index) => (
            <Box key={item.id} className={item.checked ? classes.completed : classes.notСompleted} >
              <Box>
                <Button
                  onClick={() => upTask(index)}
                  disabled={index === 0 ? true : false}>
                  <ArrowDropUpIcon className={classes.colorIcon} />
                </Button>
                <Button
                  onClick={() => DownTask(index)}
                  disabled={index === todo.length - 1 ? true : false}>
                  <ArrowDropDownIcon className={classes.colorIcon} />
                </Button>
              </Box>
              {
                editButton === item.id
                  ?
                  <Box className={classes.editTask}>
                    <TextField 
                    fullWidth 
                    InputProps={{ classes: { root: classes.editInput } }} 
                    type="text" 
                    value={editTitle} 
                    onChange={(e) => setEditTitle(e.target.value)} />
                    <Button onClick={() => saveTodo(item.id)}><SaveIcon className={classes.colorIcon} /></Button>
                  </Box>
                  :
                  <Typography className={classes.taskText}> {item.title}</Typography>
              }
              <Checkbox color="default" onClick={() => chekBox(item.id, index)} />
              <Button aria-label="edit" onClick={() => onEdit(item.id, item.title)} ><ModeEditOutlineOutlinedIcon className={classes.colorIcon} /> </Button>
              <Button aria-label="delete" onClick={() => remove(item.id)}  ><DeleteIcon className={classes.colorIcon} /> </Button>
              <Button onClick={addTask} ><AddIcon className={classes.colorIcon} /></Button>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default App

// const upTask = () => {
  //   setTodos((prevState) => {
  //     const [firstItem, ...rest] = prevState;
  //     return [...rest, firstItem];
  //   });
  // }

  // const DownTask = () => {
  //   setTodos((prevState) => {
  //     return [
  //       prevState[todo.length - 1],
  //       ...prevState.slice(0, todo.length - 1),
  //     ]
  //   })
  // }