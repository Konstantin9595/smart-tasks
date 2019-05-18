import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Search from '../components/Search'
import TaskList from '../components/TaskList';
import ItemStatusFilter from '../components/ItemStatusFilter'

export default class App extends Component {

    state = {
        tasks: [
            {id: 0, task: 'firstTask', important: false},
            {id: 1, task: 'secondTask', important: true},
            {id: 2, task: 'thirdTask', important: false}
        ]
    }

    onRemoveItem = (id) => {
        this.setState((state) => {
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== id)
            }
        })
    }

    render() {
        const { tasks } = this.state

        return (
            <div className="app">
                <Header />
                <div className="wrapper-content">
                    <div className="content">
                        <ItemStatusFilter />
                        <Search />
                        <TaskList tasks={tasks} onRemoveItem={this.onRemoveItem}/>
                    </div>
                </div>
            </div>
        );
    }
}