import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import './listHeader.css'
import {useDispatch} from "react-redux";
import {addTask, fetchTasks, searchTask} from "../store/actions/tasksAction";

const ListHeader = () => {
    const [taskName, setTaskName] = useState('')
    const [searchKey, setSearchKey] = useState('')
    const dispatch = useDispatch()

    const addNewTask = (task) => {
        if (task) {
            dispatch(addTask(task)).then(() => {
                dispatch(fetchTasks())
            })
        }
        setTaskName('')
    }

    useEffect(() => {
        if (searchKey) {
            dispatch((searchTask(searchKey)))
        } else dispatch(fetchTasks())
    }, [searchKey, dispatch])

    return (
        <div className='listHeader'>
            <div className='inputField'>
                <TextField size="small" sx={{backgroundColor: 'white', mr: '10px'}} value={taskName}
                           onChange={(event) => setTaskName(event.target.value)}/>
                <Button variant="contained" sx={{fontWeight: 'bolder'}} onClick={() => {
                    addNewTask(taskName)
                }}>Add</Button>
            </div>
            <TextField sx={{backgroundColor: 'white'}} id="outlined-basic" size="small" label="Search.."
                       variant="outlined" onChange={(event) => setSearchKey(event.target.value)}/>
        </div>
    );
};

export default ListHeader;