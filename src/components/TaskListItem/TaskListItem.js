import React, { Component } from 'react'
import './TaskListItem.css'
import classNames from 'classnames'

export default class TaskListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onDisable = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })

    }

    onImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { task, onRemoveItem } = this.props
        const { done, important } = this.state

        const classes = classNames({
            'list__group-task': true,
            'done': done,
            'important': important,
        });

        const itemManageStyles = {
            color: important ? "#007bff" : false
        }


        return (
            <li className="list-group-item">
                <div className={classes} onClick={this.onDisable}>
                    { task }
                </div>
                <div className="task__item-manage">
                    <button
                        onClick={onRemoveItem}
                        type="button"
                        className="item__manage-delete btn btn-light">
                        <i className="far fa-trash-alt">
                        </i>
                    </button>
                    <button
                        type="button"
                        className="item__manage-star btn btn-light"
                        onClick={this.onImportant}>
                        <i style={itemManageStyles}
                           className="far fa-star">
                        </i>
                    </button>
                </div>
            </li>
        )
    }
}