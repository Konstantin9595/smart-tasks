import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {

    state = {
        searchText: ''
    }

    onChange = (event) => {
        const searchText = event.target.value
        const { getSearchText } = this.props

        this.setState({searchText})

        getSearchText(searchText)
    }

    render() {
        const { value } = this.state

        return (
            <div className="search">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Поиск по задачам"
                        onChange={this.onChange}
                        value={value}
                    />
                </div>
            </div>
        )
    }

}

// getSearchText

