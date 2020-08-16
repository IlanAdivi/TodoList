import axios from 'axios';

import {
    ADD_TASK,
    FETCH_TASKS,
    DELETE_TASK,
    EDIT_TASK
} from './types';

const URL = 'http://localhost:5000';

export const addTask = term => async dispatch => {
    const res = await axios.post(`${URL}/addTask`, {
        description: term
    });

    dispatch({
        type: ADD_TASK,
        payload: res.data
    });
}

export const fetchTasks = () => async dispatch => {
    const response = await axios.get(`${URL}/tasks`);

    dispatch({
        type: FETCH_TASKS,
        payload: response.data
    });
}

export const deleteTask = id => async dispatch => {
    const res = await axios.delete(`${URL}/task/${id}`);

    dispatch({
        type: DELETE_TASK,
        payload: res.data
    });
};

export const editTask = (term, id) => async dispatch => {
    const res = await axios.put(`${URL}/task/${id}`, {
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