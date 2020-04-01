import axios from 'axios';

import {
    ADD_TODO,
    FETCH_TODOS,
    DELETE_TODO,
    EDIT_TODO
} from './types';

const URL = 'http://localhost:5000';

export const addTodo = term => async dispatch => {
    const res = await axios.post(`${URL}/addTodo`, {
        description: term
    });

    dispatch({
        type: ADD_TODO,
        payload: res.data
    });
}

// export const fetchTodos = () => async dispatch => {
//     const response = await axios.get(`${URL}/todos`);
//     console.log(response);

//     dispatch({
//         type: FETCH_TODOS,
//         payload: response.data
//     });
// }

export const fetchTodos = () => {
    return function (dispatch) {
        return axios
            .get(`${URL}/todos`)
            .then(res => {
                console.log(res.data);
                return dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                });
            });
    }
};

export const deleteTodo = id => async dispatch => {
    const res = await axios.delete(`${URL}/todo/${id}`);

    dispatch({
        type: DELETE_TODO,
        payload: res.data
    });
};

export const editTodo = (term, id) => async dispatch => {
    const res = await axios.put(`${URL}/todo/${id}`, {
        description: term
    });

    dispatch({
        type: EDIT_TODO,
        payload: {
            _id: id,
            description: res.data.description
        }
    });
};