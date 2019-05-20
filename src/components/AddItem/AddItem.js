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

            this.setState({value: ''});
        }

    }

    render () {
        const { value } = this.state
        return (
            <form onSubmit={this.handleSubmit} className="add__item-form">
                <label>
                    <input value={value} placeholder="Введите задачу" onChange={this.handleChange} />
                </label>
                {/*<input type="submit" value="Submit" />*/}
                <button type="submit" className="add-item btn btn-primary">
                    <i className="fas fa-plus"></i>
                </button>

            </form>
        )
    }
}

export default AddItem;