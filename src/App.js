// App.js === HogwartsStudents.js Hogwarts example
// not map function though... that's one todolist.js
// design `App` to be the parent component of your application.
// this component is going to take care of state (all data), and any change handlers you need to work with your state

import React from "react";

// import js files
import "./components/TodoComponents/Todo.css"; // css file
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //state is an object
      todosArray: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },

        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  // Step Description:
  // handleChanges function updates the todo prop on state (or other prop on state that has empty string and bound to input field on TodoForm)
  // this fx is passed to <input> on TodoForm for onchange attr (  onChange={props.handleChanges}  )
  // this.setState changes the value of the todo prop (currently an empty string)
  // passes in each key stroke to the todo prop on state
  // [event.target.name] will reference "todo" or other added state property
  // event.preventDefault(); needed for buttons!

  handleChanges = event => {
    console.log("event: ", event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault(); // no refreshing page

    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todosArray: [...this.state.todosArray, newTodo] // spread operator creates a copy of the array
    });
  };

  toggleItem = id => {
    this.setState({
      todosArray: this.state.todosArray.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();

    const remainingTodos = this.state.todosArray.filter( item => {
      return item.completed === false;
    });

    this.setState({ todosArray: remainingTodos });
  };

/*
  NOTES FROM CLASS:

  clearPurchased = item => {
    item.preventDefault;
    //e.preventDefault();
    // use filter method
    // iterate over items inside this.state.groceries
    // filter out any items whose item.purchased === true
    // set your state with your new filtered list
    // use filter like map with anonymous function and return only item with purchase false
    const remainingGroceries = this.state.groceries.filter(item => {
      return item.purchased === false;
    });

    this.setState({ groceries: remainingGroceries });
  };

*/ 


  // REMEMBER: if a prop is declared in a child, it needs to be declared here, too ( anything in child that is prop.something here needs to be something={} )!!!!
  render() {
    return (
      <div className="app">
        <h2>What You Have To Do Today:</h2>
        <TodoList 
          todosArray={this.state.todosArray} 
          toggleItem={this.toggleItem} 
        />
        <TodoForm
          todo={this.state.todo}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
