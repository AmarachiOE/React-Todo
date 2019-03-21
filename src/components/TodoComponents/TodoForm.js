// TodoForm.js === StudentForm.js  Hogwarts example
import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form>
      <input
        name="todo"
        value={props.todo}
        onChange={props.handleChanges}
        placeholder="Next thing todo..."
      />
      <button onClick={props.updateList}>Add Todo Item</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;

// import this file on App.js
