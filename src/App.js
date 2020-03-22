import React from 'react';
import './App.css'
import Header from "./components/Header"
import ToDoItem from "./components/ToDoItem"

function App() {
  return (
    <div className="todo-list">
      <Header/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
    </div>
  );
}

export default App;
