import React, { useState } from 'react';
import './Dolist.css';

const ToDoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const deleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={e => setTaskInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onDoubleClick={() => deleteTask(index)}>
            {task}
          </li>
        ))}
      </ul>
      <button onClick={clearTasks}>Clear All Tasks</button>
      <h4>You can now delete a task by double-clicking on it</h4>
    </div>
  );
};

export default ToDoList;
