// App.js === HogwartsStudents.js Hogwarts example

import React from 'react';

// import js files
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todosArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
      
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: "",
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todosArray={this.state.todosArray}
        />
        <TodoForm 
          todo={this.state.todo}
        />
        
      </div>
    );
  }
}

export default App;
