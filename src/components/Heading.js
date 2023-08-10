import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAllTasks} from "../store/actions/tasksAction";
import {Button} from "@mui/material";
import './Heading.css'

const Heading = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="heading">
                <span className='header'>Marvelous 2.0</span>
                <Button onClick={() => dispatch(deleteAllTasks())}>Delete All Tasks</Button>
            </div>
        </div>
    );
};

export default Heading;