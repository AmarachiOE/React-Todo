// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// container for TodoForm.js and Todo.js
// Invoke map function in this file

import React from "react";

// import needed js files
// need to be invoked in TodoList constructor fx
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {/*  map over each item in todoListItems (which is set to todoArray in App.js */}
      {props.todoListItems.map(eachTodo => (
        <Todo 
            key={todo.id} 
            todoProp={eachTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;

// import file on App.js
