import React from 'react';
import TodoList from './todos/TodoList';

const App = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-center">Todo</h1>
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    };

export default App;