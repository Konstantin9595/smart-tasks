import React from 'react'
import './TaskListItem.css'


const TaskListItem = ({ task, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <li className="list-group-item">
            <div style={ style } className="list__group-task">
                { task }
            </div>
            <div className="task__item-manage">
                <span className="item__manage-delete"><i className="far fa-trash-alt"></i></span>
                <span className="item__manage-star"><i className="far fa-star"></i></span>
            </div>
        </li>
    )

}


export default TaskListItem