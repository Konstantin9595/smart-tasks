import React, { Component } from 'react';
import './AddItem.css'
import uniqid from 'uniqid'

class AddItem extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { onAddItem } = this.props
        const { value } = this.state

        if (value) {
            onAddItem({
                id: uniqid(),
                task: value ? value : null,
                important: false
            })
        }

    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="Введите задачу" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                {/*<i className="fas fa-plus"></i>*/}
            </form>
        )
    }
}

export default AddItem;