import axios from "axios"
import {
    BASE_URL,
    FETCH_TASKS,
    UPDATE_TASK,
    ADD_TASK,
    DELETE_ALL_TASKS,
    SEARCH_TASKS
} from '../../helper'


export const fetchTasks = () => async dispatch => {
    try {
        let res1 = await axios.get(`${BASE_URL}/todos?done=false`)
        let res2 = await axios.get(`${BASE_URL}/todos?done=true`)

        dispatch({
            type: FETCH_TASKS,
            payload: [res1.data, res2.data],
        })
    } catch (e) {
        alert(e)
    }
}

export const addTask = (name, isChecked) => async dispatch => {
    const postBody = {
        todoName: name,
        isChecked: isChecked
    }

    try {
        let res = await axios.post(`${BASE_URL}/todos/insert`, postBody)

        dispatch({
            type: ADD_TASK,
            payload: res.data,
        })
    } catch (e) {
        alert(e)
    }
}

export const deleteAllTasks = () => async dispatch => {
    try {
        let res = await axios.delete(`${BASE_URL}/todos/delete`)

        dispatch({
            type: DELETE_ALL_TASKS,
            payload: res.data,
        })
    } catch (e) {
        alert(e)
    }
}

export const updateTask = (id, isChecked) => async dispatch => {
    const postBody = {
        isChecked: isChecked
    }
    try {
        let res = await axios.put(`${BASE_URL}/todos/${id}`, postBody)
        dispatch({
            type: UPDATE_TASK,
            payload: res.data,
        })
    } catch (e) {
        alert(e)
    }
}

export const searchTask = (searchKey) => async dispatch => {
    const key = searchKey.trim()
    try {
        let res1 = await axios.get(`${BASE_URL}/todos/search?keyword=${key}&done=false`)
        let res2 = await axios.get(`${BASE_URL}/todos/search?keyword=${key}&done=true`)

        dispatch({
            type: SEARCH_TASKS,
            payload: [res1.data, res2.data],
        })
    } catch (e) {
        alert(e)
    }
}
