import {
    ADD_TODO,
    FETCH_TODOS,
    DELETE_TODO,
    EDIT_TODO
} from '../actions/types';

export const todos = (state = null, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
            
        case FETCH_TODOS:
            return action.payload;

        case DELETE_TODO:
            return state.filter(task =>
                task._id !==
                action.payload._id);

        case EDIT_TODO:
            return state.map(task => {
                if (task._id === action.payload._id) {
                    task.description = action.payload.description
                }
                return task;
            });

        default:
            return state;
    }
}