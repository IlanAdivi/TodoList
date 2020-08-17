import axios from 'axios';

import {
    ADD_TASK,
    FETCH_TASKS,
    DELETE_TASK,
    EDIT_TASK
} from './types';

export const addTask = term => async dispatch => {
    const res = await axios.post(`/addTask`, {
        description: term
    });

    dispatch({
        type: ADD_TASK,
        payload: res.data
    });
}

export const fetchTasks = () => async dispatch => {
    const response = await axios.get(`/tasks`);

    dispatch({
        type: FETCH_TASKS,
        payload: response.data
    });
}

export const deleteTask = id => async dispatch => {
    const res = await axios.delete(`/task/${id}`);

    dispatch({
        type: DELETE_TASK,
        payload: res.data
    });
};

export const editTask = (term, id) => async dispatch => {
    const res = await axios.put(`/task/${id}`, {
        description: term
    });

    dispatch({
        type: EDIT_TASK,
        payload: {
            _id: id,
            description: res.data.description
        }
    });
};