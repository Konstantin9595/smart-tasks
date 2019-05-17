import React from 'react'

const TaskList = () => {
    const tasks = ["firstTask", "secondTask"]

    return (
        <div className="task-list">
            { tasks.map((task, ndx) => <li key={ndx}>{ task }</li> ) }
        </div>
    )
}

export default TaskList