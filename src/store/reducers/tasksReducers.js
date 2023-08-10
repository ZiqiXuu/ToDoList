import {
    FETCH_TASKS,
    UPDATE_TASK,
    ADD_TASK,
    DELETE_ALL_TASKS,
    SEARCH_TASKS,
} from "../../helper";

const initStates = {
    checkedTasks: [],
    uncheckedTasks: [],
}

export const tasksReducer = (state = initStates, action) => {
    switch (action?.type) {
        case FETCH_TASKS:
            return {checkedTasks: action?.payload[0], uncheckedTasks: action?.payload[1]}
        case ADD_TASK:
            return {...state}
        case UPDATE_TASK:
            return {...state}
        case DELETE_ALL_TASKS:
            return {checkedTasks: [], uncheckedTasks: []}
        case SEARCH_TASKS:
            return {checkedTasks: action.payload[0], uncheckedTasks: action.payload[1]}
        default:
            return state
    }
}