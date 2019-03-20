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
    <div>
      {/*  map over each item in todoListItems (which is set to todoArray in App.js */}
      {props.todosArray.map(todo => (
        <Todo 
            key={todo.id} 
            todoProp={todo} 
        />
      ))}
    </div>
  );
};

export default TodoList;

// import file on App.js
