// Todo.js === Student.js Hogwarts example
// <Todo /> is a component that takes in the todo data and displays the task to the screen.
// pretty much adding style... each task is bold

import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div>
      <p>
        <strong>{props.todoProp.task}</strong>
      </p>
    </div>
  );
};

export default Todo;

// import this file on TodoList.js
