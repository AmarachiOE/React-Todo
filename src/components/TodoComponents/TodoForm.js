// TodoForm.js === StudentForm.js  Hogwarts example
import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form className="todoform-container">
      <input
        name="todo"
        value={props.todo}
        onChange={props.handleChanges}
        placeholder="Next thing todo..."
      />
      <button onClick={props.updateList}>Add Item to Todo List</button>
      <button onClick={props.clearCompleted}>Clear Completed Items</button>
    </form>
  );
};

export default TodoForm;

// import this file on App.js
