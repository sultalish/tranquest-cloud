import { useEffect, useState } from "react";
import { db } from "../service/firebase";
import Tasks from "./Tasks";

const TaskDetails = () =>{
    // eslint-disable-next-line
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        //this code runs when app.js loads
        db.collection('tasks').onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => doc.data().task))
        })
    }, []);

    const addTasks = (event) => {
        //this will fire off when we click the button
        event.preventDefault(); //it will stop refresh

        db.collection('tasks').add({
            task: input
        })

        setTasks([...tasks, input]);//pushes it to the end
        setInput(''); //clears input
    }

    return(
        <div className="Add-ToDo">
            <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick ={addTasks}>Add To List</button>
            <ul>
                {tasks.map(tasks => (
                    <Tasks text={tasks}/>
                ))}
            </ul>
            </form>
        </div>
    )
    
}
export default TaskDetails;