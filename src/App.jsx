import React, { useEffect, useState } from 'react'
import { useStyles } from './assets/styles/styles';
import { TextField, Box, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import ListItems from './components/listItems/ListItems';

const App = () => {
  const classes = useStyles();
  const [title, setInput] = useState('')
  const [todo, setTodos] = useState(
    JSON.parse(localStorage.getItem('todo')) || []
  );

  useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo));
	}, [todo]);

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

  return (
    <Box className={classes.container}>
      <Box className={classes.block__form}>
        <TextField 
        value={title} 
        variant="outlined" 
        onChange={event => setInput(event.target.value)} 
        fullWidth 
        InputProps={{ classes: { root: classes.form } }} />
        <Button onClick={addTask} ><AddIcon className={classes.colorIcon} /></Button>
      </Box>
      <ListItems todo={todo} setTodos={setTodos}/>
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


  