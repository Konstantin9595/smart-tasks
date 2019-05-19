import React from 'react'
import './ItemStatusFilter.css'

const ItemStatusFilter = () => {

    return (
        <div className="item__status-filter">
            <button type="button" className="btn btn-primary">Все</button>
            <button type="button" className="btn btn-light">Важные</button>
            <button type="button" className="btn btn-light">Завершенные</button>
        </div>
    )
}

export default ItemStatusFilter