import React from 'react'
import TaskListItem from '../TaskListItem/TaskListItem'
import './TaskList.css'


const TaskList = ({ tasks, onRemoveItem, onDisable, onImportant}) => {

    const elements = tasks.map(( { id, ...itemProps,  } ) => {
        return <TaskListItem
            onRemoveItem={ () => onRemoveItem(id) }
            onDisable={() => onDisable(id) }
            onImportant={() => onImportant(id) }
            key={id} { ...itemProps } />
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>
    )
}

export default TaskList