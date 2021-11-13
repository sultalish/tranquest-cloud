import React from 'react'

const Tasks = ({task, markComplete}) => {

    return (
        <div>
            <li onClick={() => markComplete(task.id)}>{task.task}</li>
        </div>
    )
}
export default Tasks;
