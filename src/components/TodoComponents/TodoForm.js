// TodoForm.js === StudentForm.js  Hogwarts example
import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input 
                type="text"
                name="todo"
                placeholder="Next thing todo..."
            />
            <button>Add Todo Item</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;

// import this file on App.js

