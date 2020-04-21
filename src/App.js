import React from 'react';
import './App.css'
import Header from "./components/Header"
import ToDoItem from "./components/ToDoItem"
import TodoData from "./components/ToDoDatas"

function App() {
  const todoItems = TodoData.map(item => <ToDoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
     
    </div>
  );
}

export default App;
