// Todo.js === Student.js Hogwarts example
// pretty much adding style... each task is bold


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