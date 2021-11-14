import React from 'react';

const Tasks = ({task, markComplete, deleteTask}) => {

    return (
        <div>
            <li>{task.task}</li>
            <li>{task.dueDate}</li>
            <li onClick={(e) => markComplete(e, task.id)}>Mark Complete</li>
            <li onClick={(e) => deleteTask(e, task.id)}>Delete</li>
            <br></br>
        </div>
    )
}
export default Tasks;
