import React from 'react'

const Tasks = ({task, markComplete, deleteTask}) => {
    console.log(task.id);
    return (
        <div>
            <li onClick={() => markComplete(task.id)}>{task.task}</li>
            <p onClick={(e) => deleteTask(e, task.id)}>Delete</p>
        </div>
    )
}
export default Tasks;
