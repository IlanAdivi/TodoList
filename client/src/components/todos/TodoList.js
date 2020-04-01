import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchTodos,
    addTodo,
    deleteTodo,
    editTodo
} from '../../actions';

function TodoList() {
    const [term, setTerm] = useState("");
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
        setTerm("");
    }, [dispatch]);

    function onInputChange(e) {
        setTerm(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(term));
        setTerm("");
    }

    function onDelete(itemId, e) {
        e.preventDefault();
        dispatch(deleteTodo(itemId));
    }

    function onEdit(itemId, e) {
        e.preventDefault();
        dispatch(editTodo(term, itemId));
        setTerm("");
    }

    return (
        <div className="col-md-12">
                <form
                    onSubmit={e => onSubmit(e)}>
                    <div
                        className="form-group">
                        <label>Task Name</label>
                        <div
                            className="row">
                            <div
                                className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => onInputChange(e)}
                                    value={term}
                                />
                            </div>
                            <div
                                className="col-md-1">
                                <button
                                    type="submit"
                                    onClick={e => onSubmit(e)}
                                    className="btn btn-success">
                                    Add
            </button>
                            </div>
                        </div>
                    </div>
                </form>
                <table
                    className="table">
                    <tbody>
                        {!todos ? null :
                            todos.map((item, index) => (
                                <tr key={index}>
                                    <td
                                        className="text-left">
                                        {item.description}
                                    </td>
                                    <td
                                        className="text-right">
                                        <button
                                            className="btn btn-info mr-1"
                                            disabled={!term ? true : false}
                                            onClick={e => onEdit(item._id, e)}
                                        >
                                            Edit
        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={e => onDelete(item._id, e)}
                                        >
                                            Delete
        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
        </div>
    );
}

export default TodoList;