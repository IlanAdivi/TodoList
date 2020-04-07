import {
    ADD_TASK,
    FETCH_TASKS,
    DELETE_TASK,
    EDIT_TASK
} from '../actions/types';

export const tasks = (state = null, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload
            ];
            
        case FETCH_TASKS:
            return action.payload;

        case DELETE_TASK:
            return state.filter(task =>
                task._id !==
                action.payload._id);

        case EDIT_TASK:
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