import { useEffect, useState } from "react";
import { db, auth } from "../service/firebase";
import Tasks from "./Tasks";

const TaskDetails = () => {
    // eslint-disable-next-line
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        //this code runs when app.js loads
        db.collection('users').doc(auth.currentUser.uid).collection('tasks').onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    const addTasks = async (event) => {
        //this will fire off when we click the button
        event.preventDefault(); //it will stop refresh

        const res = await db.collection('users').doc(auth.currentUser.uid).collection('tasks').add({
            task: input,
            completed: false
        })

        setTasks([...tasks, {task: input, completed: false, id: res.id}]);//pushes it to the end
        setInput(''); //clears input
    }

    const markComplete = (id) => {
      console.log(id);
      db.collection('users').doc(auth.currentUser.uid).collection('tasks').doc(id).update({
        completed: true
      })
    }

    return(
        <div className="Add-ToDo">
            <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick ={addTasks}>Add To List</button>
            <ul>
                {tasks.map(task => (
                    <Tasks key={task.id} task={task} markComplete={markComplete}/>
                ))}
            </ul>
            </form>
        </div>
    )

}
export default TaskDetails;
