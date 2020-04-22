import React from 'react';
import './App.css'
import ToDoItem from "./components/ToDoItem"
import todoData from './components/ToDoDatas';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
  }
  render(){
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        {todoItems}
       
      </div>
    );
  }
  }
 

export default App;
