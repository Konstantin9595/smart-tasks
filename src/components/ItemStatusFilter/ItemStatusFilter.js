import React, { Component } from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    state = {
        active: null,
        buttons: [
            {id: "0", type: "button", value: "all", text: "Все"},
            {id: "1", type: "button", value: "important", text: "Важные"},
            {id: "2", type: "button", value: "done", text: "Завершенные"},
        ]
    }

    handleStatus = (event) => {
        const { checkStatus } = this.props
        checkStatus(event.target.value)
    }



    render() {
        const { buttons } = this.state
        const { status } = this.props

        const elements = buttons.map((el) => {

            const clazz = el.value === status ? true : false

            return <button type={el.type}
                           key={el.id}
                           className={`btn ${clazz ? "btn-primary" : "btn-light"}`}
                           value={el.value}
                           onClick={this.handleStatus}
                           >
                    {el.text}
                   </button>
        })

        return (
            <div className="item__status-filter">
                { elements }
            </div>
        )
    }

}