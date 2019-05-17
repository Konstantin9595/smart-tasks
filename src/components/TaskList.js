import React from 'react'
import TaskListItem from './TaskListItem'

const TaskList = ({ tasks }) => {

    const elements = tasks.map(( { id, ...itemProps,  } ) => {
        return <TaskListItem key={id} { ...itemProps } />
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>
    )
}

export default TaskList