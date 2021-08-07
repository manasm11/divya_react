import React from 'react'
import ListItem from './ListItem'

function List({ list, handleCheckbox }) {

    return (
        <div>
            {list.map((item, i) => <ListItem text={item.text} completed={item.completed} onCheckbox={handleCheckbox(i)} />)}
        </div>
    )
}

export default List
