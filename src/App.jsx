// App.js

import React from 'react';
import './App.css';
import Clock from './Clock.jsx';
import Timer from './timer.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <div className="app">
      <div className="left-column">
        <Clock/>
        <Timer/>
      </div>
      <div className="right-column">
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
