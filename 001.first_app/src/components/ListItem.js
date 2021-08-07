import React from 'react'

function ListItem({ text, completed, onCheckbox }) {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onCheckbox} />
            {text}
        </div>
    )
}

export default ListItem