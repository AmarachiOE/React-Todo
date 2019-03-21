// Todo.js === Student.js Hogwarts example
// <Todo /> is a component that takes in the todo data and displays the task to the screen.
// pretty much adding style... each task is bold

import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div className={`item ${props.todoProp.completed ? "completed" : ""}`} onClick={() => props.toggleItem(props.todoProp.id)}>
      <p>{props.todoProp.task}</p>
    </div>
  );
};

export default Todo;

// import this file on TodoList.js


/*

const Item = props => {
  //to see what names you have props.item.name get name
  //console.log(props);
  // props.toggleItem(props.item.id) gives the argument toggleItem(id)
  // this is also called passing data back up the chain (grandchild to parent)
  // onClick={() => props.toggleItem(props.item.id)} this is wrapping it in an anonymous fx for rendering protection
  // ${props.item.purchase ? purchased :  ''} if item.purchased is true to purchased then add purchased class, if not, nothing
  // so what this is saying is: if the purchased key on item is valued true (item.purchased: true) from the toggle then add "purchased" to the class list... in the css file, .item.purchased class has unique styling (line-through)
  // "the condition" ? is condition true? do alert('hello') : else, if it's false? do alert ('goodbye')
  
  return (
    <div
      className={`item ${props.item.purchased ? "purchased" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name} </p>
    </div>
  );
};










*/