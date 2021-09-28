import React from 'react'

const List = (props) => {
    return (
        <>
            <div className="list d-flex1">
                <span>{props.val.description}</span>
                <img src="remove.png" alt="delete_btn" onClick={() => props.deleteTask(props.index)} />
            </div>
        </>
    )
}

export default List
