import React, {useState} from 'react'
import Styles from './ToDoList.module.css'
function ToDoList(){
    const[tasks,setTasks]=useState(["Eat breakfast","Learn Coding","Go to Gym"]);
    const[newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !==""){
       setTasks(t => [...t,newTask]);
        setNewTask("");
        }

    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i) => i!==index);
        setTasks(updatedTasks);
       


    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
           [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
           setTasks(updatedTasks);
            
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
           [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
           setTasks(updatedTasks);
            
        }
        
    }
    return(
        <div className={Styles.todolist}>
            <h1>To-Do-List</h1>
            <div>
                <input
                type="text"
                placeholder="Enter a task..."
                value={newTask} onChange={handleInputChange}/>
                <button className={Styles.addbutton} onClick={addTask}>Add</button>
                <ol>
                    {tasks.map((task,index) => <li key={index}>{task}<span className="text"></span>
                    <button className={Styles.delete} onClick={() => deleteTask(index)}>Delete</button>
                    <button className={Styles.moveup} onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className={Styles.movedown} onClick={() => moveTaskDown(index)}>⬇️</button></li>)}
                </ol>

            </div>


        </div>
    );

}
export default ToDoList