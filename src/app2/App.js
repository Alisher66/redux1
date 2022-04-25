import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";

import {useSelector, useDispatch} from 'react-redux';
import {addTaskAction, deleteTaskAction, changeTaskAction} from './store/actions';
import {useState,} from 'react';
import {changeNoteAction} from "../app1/store/actions";


export function App() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);


    const creatTask = (e) => {
        e.preventDefault()
        const task = {
            id: Date.now(),
            text: "",
            done: false,
        }
        dispatch(addTaskAction(task));
    }

    const deleteTask = (e, task) => {
        e.preventDefault()
        dispatch(deleteTaskAction((task)))
    }

    const changeTaskText = (e, task) => {
        const changedTask = {
            ...task,
            text: e.target.value,
        }
        dispatch(changeTaskAction(changedTask))
    }
    const changeTaskStatus = (task) => {
        const changedTask = {
            ...task,
            done: !task.done
        }
        dispatch(changeTaskAction(changedTask))
    }

    const renderActiveTasks = () => {
        const activeTasks = tasks.filter(task => !task.done)
        if (activeTasks.length === 0) return <Typography variant="h6" component="h6"> Пусто </Typography>

        return (
            <List>
                <Typography variant="h5" component="h5">Новые задачи</Typography>
                {activeTasks.map(task => {
                    return (
                        <ListItem key={task.id} sx={{width: "100%", justifyContent: "space-between"}}>
                            <Checkbox onChange={(e) => {
                                changeTaskStatus(task)
                            }}/>
                            <TextField variant="standard" onChange={(e) => {
                                changeTaskText(e, task)
                            }} value={task.text}/>
                            <Button onClick={(e) => {
                                deleteTask(e, task)
                            }}>Delete</Button>
                        </ListItem>
                    )
                })}
            </List>
        )
    }

    const renderDoneTasks = () => {
        const doneTasks = tasks.filter(task => task.done)
        if (doneTasks.length === 0) return <Typography variant="h6" component="h6"> Пусто </Typography>

        return (
            <List>
                <Typography variant="h5" component="h5">Выполненные задачи</Typography>
                {doneTasks.map(task => {
                    return (
                        <ListItem key={task.id} sx={{width: "100%", justifyContent: "space-between"}}>
                            <Checkbox onChange={(e) => {
                                changeTaskStatus(task)
                            }} defaultChecked/>
                            <TextField variant="standard" onChange={(e) => {
                                changeTaskText(e, task)
                            }} value={task.text}/>
                            <Button onClick={(e) => {
                                deleteTask(e, task)
                            }}>Delete</Button>
                        </ListItem>
                    )
                })}
            </List>
        )
    }

    return (
        <Container maxWidth="md">
            <Box component="div" sx={{display: "flex", justifyContent: "space-between", mt: "50px"}}>
                <Typography variant="h4" component="h4" sx={{mb: "20px"}}>
                    Задача:
                </Typography>
                <Button type="submit" variant="contained" sx={{ml: "10px"}} onClick={creatTask}>Добавить</Button>
            </Box>

            <Box component="div" sx={{display: "flex", justifyContent: "space-between", mt: "50px"}}>
                {renderActiveTasks()}
                {renderDoneTasks()}
            </Box>

        </Container>
    );
}

