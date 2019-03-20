// <TodoList /> receives your todosArray and iterates (map) over the list generating a new <Todo /> for each element in the array
// Need to import Todo.js
// Invoke map function in this file

import React from "react";

// import needed js files
// need to be invoked in TodoList constructor fx
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {/*  map over each item in todosArray (which is created under state in App.js 
        todosArray is passed down to TodoList as a prop here
    */}
      {props.todosArray.map(todo => (
        <Todo key={todo.id} todoProp={todo} />
      ))}
    </div>
  );
};

export default TodoList;

// import file on App.js
