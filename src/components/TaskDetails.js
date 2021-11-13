import { useEffect, useState } from "react";
import { auth, db } from "../service/firebase";
import Tasks from "./Tasks";

const TaskDetails = () =>{
    // eslint-disable-next-line
    const [tasks, setTasks] = useState([]);
    const [dueDate, setDueDate] = useState([]);
    const [input, setInput] = useState('');
    const [dueDateInput, setDueDateInput] = useState('');

    useEffect(() => {
        //this code runs when app.js loads
        db.collection('users').doc(auth.currentUser.uid).collection('tasks').orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
    // eslint-disable-next-line
    const addTasks = (event) => {
        //this will fire off when we click the button
        event.preventDefault(); //it will stop refresh

        db.collection('users').doc(auth.currentUser.uid).collection('tasks').add({
            task: input, dueDate: dueDateInput
        })

        setTasks([...tasks, input]);//pushes it to the end
        setDueDate([...dueDate, dueDateInput]);
        setDueDateInput('');
        setInput(''); //clears input
    }



    return(
        <div className="Add-To-Do">

                <p>Tasks</p>
                <form>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <input value={dueDateInput} onChange={event => setDueDateInput(event.target.value)}/>
                <button onClick ={addTasks}>Add To List</button>
                    <ul>
                        {tasks.map(tasks => (
                            <Tasks text={tasks}/>))}
                        {dueDate.map(dueDate  => (
                            <Tasks dueDate={dueDate}/>
                        ))}
                    </ul>
                </form>
        </div>
    )
}
export default TaskDetails;