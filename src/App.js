import logo from './logo.svg';
import './App.css';
import { movies } from './reviews';
import { useState } from 'react';


const addTodo = () => {
  if (todoName) {
    const newTodo = {
      id: todos.length + 1,
      name: todoName,
      completed: false,
      confidence: parseInt(confidence, 10),
    };
    setTodos([...todos, newTodo]); 
    setTodoName(""); 
    setConfidence(5); 
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Review Movies
        </p>
        <a>
        
        </a>
      </header>
    </div>
  );
}

export default App;
