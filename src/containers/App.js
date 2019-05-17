import React from 'react';
import '../App.css';
import Header from '../components/Header'
import Search from '../components/Search'
import TaskList from "../components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <TaskList />
    </div>
  );
}

export default App;
