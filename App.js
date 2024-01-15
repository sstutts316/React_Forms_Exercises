import React from 'react';
import ToDoList from './ToDoApp/ToDoList'; // Adjusted import path
import './ToDoApp/ToDo.css'; // Adjusted import path for CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
