import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from "@mui/material/Checkbox";
import { TextField, Box, Button, Typography, } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useStyles } from '../../assets/styles/styles';


const Item = ({ item, setTodos, todo, index }) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState(false)
    const [editTitle, setEditTitle] = useState('')

    const remove = (id) => {
        const newArr = todo.filter(title => title.id !== id)
        setTodos(newArr)
    };

    const onEdit = (id, title) => {
        setSelectedItem(id)
        setEditTitle(title)
    }

    const saveTodo = (id) => {
        todo.map(item => {
            if (item.id === id) {
                item.title = editTitle
            }
            return item.title
        })
        setSelectedItem(false)
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
        const itemAbove = todo[index];
        todo[key - 1] = todo[key];
        todo[key] = itemAbove;
        setTodos([...todo]);
    }

    const downTask = (key) => {
        // if (key === items.length - 1) return;
        const index = key + 1;
        const itemBelow = todo[index];
        todo[key + 1] = todo[key];
        todo[key] = itemBelow;
        setTodos([...todo]);
    }

    return (
        <Box className={classes.block__tasks}>
            <Box className={item.checked ? classes.completed : classes.notСompleted} >
                    <Button
                        onClick={() => upTask(index)}
                        disabled={index === 0 ? true : false}
                        className={classes.buttDisabled}>
                        <ArrowDropUpIcon className={classes.colorIcon} />
                    </Button>
                    <Button
                        onClick={() => downTask(index)}
                        disabled={index === todo.length - 1 ? true : false}
                        className={classes.buttDisabled}>
                        <ArrowDropDownIcon className={classes.colorIcon} />
                    </Button>
                {
                    selectedItem === item.id
                        ?
                        <Box className={classes.editTask}>
                            <TextField
                                InputProps={{ classes: { root: classes.editInput } }}
                                type="text"
                                fullWidth
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)} />
                                
                        </Box>
                        :
                        <Typography className={classes.taskText}> {item.title}</Typography>
                }
                <Checkbox color="default" onClick={() => chekBox(item.id, index)} />
                
                    {!selectedItem ?
                        <ModeEditOutlineOutlinedIcon className={classes.colorIcon} onClick={() => onEdit(item.id, item.title)} /> : <SaveIcon onClick={() => saveTodo(item.id)} className={classes.colorIcon} />}
                <DeleteIcon onClick={() => remove(item.id)} className={classes.colorIcon} /> 
            </Box>
        </Box>
    )
}

export default Item