import { useEffect, useState } from "react";
import { auth, db } from "../service/firebase";
import firebase from '../service/firebase';
import Tasks from "./Tasks";
import './Tasks.css';

const TaskDetails = () =>{
    // eslint-disable-next-line
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [dueDateInput, setDueDateInput] = useState('');

    useEffect(() => {
        //this code runs when app.js loads

        db.collection('users').doc(auth.currentUser.uid).collection('tasks')
        .onSnapshot(snapshot => { setTasks(snapshot.docs.map(doc => doc.data()))
        })
        // eslint-disable-next-line
    }, []);
    console.log(tasks);
    // eslint-disable-next-line
    const addTasks = async (event) => {
        //this will fire off when we click the button
        event.preventDefault(); //it will stop refresh

        if (input === undefined){
            return;
        }

        else if (input === ""){
            return;
        }

        else if (dueDateInput === ""){
            return;
        }

        const res = await db.collection('users').doc(auth.currentUser.uid).collection('tasks').add({
            task: input, dueDate: dueDateInput, completed: false, id: 0
        })

        db.collection('users').doc(auth.currentUser.uid).collection('tasks').doc(res.id).update({
          id: res.id,
        })

        setTasks([...tasks, {title: input, dueDate: dueDateInput, completed: false, id: res.id}]);//pushes it to the end
        setDueDateInput('');
        setInput(''); //clears input
    }

    const markComplete = (event, id) => {
      event.preventDefault();
      db.collection('users').doc(auth.currentUser.uid).collection('tasks').doc(id).update({
        completed: true
      })
      db.collection('users').doc(auth.currentUser.uid).update({
        tasksCompleted: firebase.firestore.FieldValue.increment(1),
        xplevel: firebase.firestore.FieldValue.increment(100)
      })
    }

    const deleteTask = (event, id) => {
      event.preventDefault();
      db.collection('users').doc(auth.currentUser.uid).collection('tasks').doc(id).delete();
      setTasks(tasks.filter(task => task.id !== id));
    }

    return(
        <div className="Add-To-Do">
          <div className="task-header">
            <h2>Tasks</h2>
            <p>Add</p>
          </div>
          <div className="task-dashboard">
            <div className="taskbar">
              {tasks.map(task => (
                  <Tasks
                    key={task.id}
                    task={task}
                    markComplete={markComplete}
                    deleteTask={deleteTask}
                  />))}
            </div>

            <div className="center-dash">
              <form className="task-add-form">
                <h1>Add Task</h1>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <input value={dueDateInput} onChange={event => setDueDateInput(event.target.value)}/>
                <button onClick ={addTasks}>Add To List</button>
              </form>
            </div>
          </div>

        </div>
    )
}
export default TaskDetails;
