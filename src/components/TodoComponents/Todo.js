// Todo.js === Student.js Hogwarts example

import React from 'react';

const Todo = props => {
    return (
        <div className="todo-info">
            <p><strong>{props.todoProp.task}</strong></p>
        </div>
    )
}


export default Todo;

// import this file on TodoList.js