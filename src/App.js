import React, { useState } from 'react'

import './App.css';
import NewTask from './components/Tasks/NewTask';
import TasksList from './components/Tasks/TasksList';

function App() {
  const [tasksList, setTasksList] = useState([]);

  const newTaskHandler = task => {
    setTasksList(prevList => {
      return [...prevList, task]
    });
  };

  const removeHandler = task => {

  };

  return (
    <div>
      <NewTask addNewTask={newTaskHandler} /> 
      <TasksList items={tasksList} onRemove={removeHandler} />    
    </div>
  );
}

export default App;
