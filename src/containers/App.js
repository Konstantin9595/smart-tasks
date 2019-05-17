import React from 'react';
import './App.css';
import Header from '../components/Header'
import Search from '../components/Search'
import TaskList from '../components/TaskList';
import ItemStatusFilter from '../components/ItemStatusFilter'

function App() {
  const tasks = [
      {id: 0, task: 'firstTask', important: false},
      {id: 1, task: 'secondTask', important: true},
      {id: 2, task: 'thirdTask', important: false}
  ]
  return (
    <div className="app">
      <Header />
      <div className="wrapper-content">
        <div className="content">
            <ItemStatusFilter />
            <Search />
            <TaskList tasks={tasks} />
        </div>
      </div>

    </div>
  );
}

export default App;