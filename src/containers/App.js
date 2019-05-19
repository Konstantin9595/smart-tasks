import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Search from '../components/Search'
import TaskList from '../components/TaskList';
import ItemStatusFilter from '../components/ItemStatusFilter'
import AddItem from '../components/AddItem'

export default class App extends Component {
    state = {
        tasks: [
            {id: 0, task: 'firstTask', done: false, important: false},
            {id: 1, task: 'secondTask', done: false,  important: false},
            {id: 2, task: 'thirdTask', done: false, important: false}
        ],
        searchText: ""
    }

    toggleDone = (arr, ndx) => {
        // find needed task
        const doneNdx = arr.findIndex(el => el.id === ndx)
        const neededItem = arr[doneNdx]

        // change needed task parameters
        const newItem = {
            ...neededItem,
            done: !neededItem.done
        }
        // create new state immutable
        return [
            ...arr.slice(0,doneNdx),
            newItem,
            ...arr.slice(doneNdx+1)
        ]

    }

    toggleImportant = (arr, ndx) => {
        // find needed task
        const doneNdx = arr.findIndex(el => el.id === ndx)
        const neededItem = arr[doneNdx]

        // change needed task parameters
        const newItem = {
            ...neededItem,
            important: !neededItem.important
        }
        // create new state immutable
        return [
            ...arr.slice(0,doneNdx),
            newItem,
            ...arr.slice(doneNdx+1)
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

    onAddItem = (task = {}) => {

        this.setState((state) => {
            const newState = [...state.tasks, task]

            return {
                ...state,
                tasks: newState
            }
        })
    }

    onDisable = (id) => {
        this.setState(( { tasks } ) => {
            return {
                tasks: this.toggleDone(tasks, id)
            }

        })

    }

    onImportant = (id) => {
        this.setState(( { tasks } ) => {
            return {
                tasks: this.toggleImportant(tasks, id)
            }

        })
    }


    getSearchText = (searchText) => {
        this.setState({searchText})
    }

    searchFilter = (tasks, searchText) => {
        if(!searchText) {
            return tasks
        }

        return tasks.filter(el => el.task.indexOf(searchText) > -1 )
    }

    render() {
        const { tasks, searchText } = this.state
        const visibleData = this.searchFilter(tasks, searchText)

        return (
            <div className="app">
                <Header />
                <div className="wrapper-content">
                    <div className="content">
                        <ItemStatusFilter />
                        <Search
                            getSearchText={this.getSearchText}/>
                        <TaskList
                            tasks={visibleData}
                            onRemoveItem={this.onRemoveItem}
                            onDisable={this.onDisable}
                            onImportant={this.onImportant} />
                        <AddItem onAddItem={this.onAddItem}  />
                    </div>
                </div>
            </div>
        );
    }
}