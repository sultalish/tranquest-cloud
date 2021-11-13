import { useEffect, useState } from "react";
import { auth, db } from "../service/firebase";
import Tasks from "./Tasks";

const TaskDetails = () =>{
    // eslint-disable-next-line
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [dueDateInput, setDueDateInput] = useState('');

    useEffect(() => {
        //this code runs when app.js loads

        db.collection('users').doc(auth.currentUser.uid).collection('tasks')
        .onSnapshot(snapshot => { setTasks(snapshot.docs.map(doc => {
            return {title: doc.data().task, dueDate: doc.data().dueDate};
            }))
        })
        // eslint-disable-next-line
    }, []);
    console.log(tasks);
    // eslint-disable-next-line
    const addTasks = (event) => {
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

        else{
            for (let i = 0; i < tasks.length; i++)
            {
                if (tasks[i].title === input)
                {
                    return;
                }
            }
        }

        db.collection('users').doc(auth.currentUser.uid).collection('tasks').add({
            task: input, dueDate: dueDateInput
        })

        setTasks([...tasks, {title: input, dueDate: dueDateInput}]);//pushes it to the end
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
                        {tasks.map(task => (
                            <Tasks text={task.title} dueDate={task.dueDate} key={task.title}/>))}
                    </ul>
                </form>
        </div>
    )
}
export default TaskDetails;