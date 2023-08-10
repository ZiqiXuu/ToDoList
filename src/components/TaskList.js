import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks, updateTask} from "../store/actions/tasksAction";
import {Checkbox} from "@mui/material";
import './taskList.css'

const TaskList = () => {
    const dispatch = useDispatch()
    const checkedTasks = useSelector(state => state.tasksReducer?.checkedTasks)
    const uncheckedTasks = useSelector(state => state.tasksReducer?.uncheckedTasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch]);
    const handleChange = (id, isChecked) => {
        dispatch(updateTask(id, !isChecked)).then(() => {
            dispatch(fetchTasks())
        })
    }
    const list = (title, tasks) => {
        return (
            <div className='taskList'>
                <div className='listTitle'>{title}</div>
                {tasks?.map((task, index) => {
                    return (
                        <div key={index} className='task'>
                            <Checkbox color="default" onChange={() => handleChange(task.id, task.isChecked)}
                                      checked={task.isChecked} name="task"/>
                            <span className='taskName'>{task.todoName}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='taskListContainer'>
            {list('TO DO', checkedTasks)}
            {list('DONE', uncheckedTasks)}
        </div>
    );
};

export default TaskList;