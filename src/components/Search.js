import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <div className="search">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <input className="form-control" />
            </div>
        </div>
    )
}

export default Search

