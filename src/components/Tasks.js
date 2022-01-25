import React from 'react';
import './Tasks.css';

const Tasks = ({task, markComplete, deleteTask}) => {

    const strikethrough = {
      textDecoration: "line-through",
    }

    const plain = {
      textDecoration: "none",
    }

    return (
        <div className="task" style={task.completed ? strikethrough : plain}>
            <div className="task-title">{task.task}</div>
            <div className="task-dueDate">{task.dueDate}</div>
            <div className="task-markComplete" onClick={(e) => markComplete(e, task.id)}>Mark Complete</div>
            <div className="task-delete" onClick={(e) => deleteTask(e, task.id)}>Delete</div>
        </div>
    )
}
export default Tasks;
