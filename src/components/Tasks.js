import React from 'react'

const Tasks = (props) => {
    return (
        <div>
            <li>{props.text}</li>
            <li>{props.dueDate}</li>
        </div>
    )
}
export default Tasks;