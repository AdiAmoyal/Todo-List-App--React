import React, { useState } from 'react'

import './App.css';
import NewTask from './components/Tasks/NewTask';
import TasksList from './components/Tasks/TasksList';

function App() {
  const [tasksList, setTasksList] = useState([{task: "Learn React", date: new Date(), completed: true},
                                              {task: "Homework", date: new Date(), completed: false},
                                              {task: "Create self project", date: new Date(), completed: false}]);

  const newTaskHandler = task => {
    setTasksList(prevList => {
      return [...prevList, task]
    });
  };

  const removeHandler = taskId => {
    setTasksList(prevList => {
      return [...prevList.slice(0, taskId), ...prevList.slice(taskId + 1, )]
    });
  };

  const completedHandler = taskId => {
    setTasksList(prevList => {
      prevList[taskId].completed = true
      return [...prevList]
    });
  }

  return (
    <div>
      <NewTask addNewTask={newTaskHandler} /> 
      <TasksList items={tasksList} onRemove={removeHandler} onCompleted={completedHandler} />    
    </div>
  );
}

export default App;
