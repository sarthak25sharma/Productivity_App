import React,{useState} from "react";

function ToDoList(){

    const[tasks,setTasks]=useState(["Eat Breakfast","Take a Shower","Walk the dog"]);
    const[newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTask=tasks.filter((element,i)=>i!==index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index>0){
            const  updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const  updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }
    return(<>
        <div className=" flex-1 p-1 font-mono fixed top-0 right-0 h-screen w-1/2  to-do-list">
            <h1 className="text-9xl  to-do-h1">TO-DO-LIST</h1>
            <div className="flex items-center justify-center p-12"> 
                <input className=" text-4xl space-x-2.5 "type="text" 
                placeholder="ENTER A NEW TASK..." 
                value={newTask}
                onChange={handleInputChange}>
                </input>
                <button className=" text-4xl p-5 add-button"
                    onClick={addTask}>ADD</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li className="text-2xl space-x-2.5 "key={index}>
                        <span className="text">{task}</span>
                        <button className="p-7 space-x-2.5 delete-button"
                            onClick={()=>deleteTask(index)}>DELETE</button>
                        <button className="p-7 space-x-2.5 move-button"
                            onClick={()=>moveTaskUp(index)}>MOVE UP</button>
                        <button className="p-7 space-x-2.5 move-button"
                            onClick={()=>moveTaskDown(index)}>MOVE DOWN</button>
                    </li>)}
            </ol>
        </div>
    
    </>);
}
export default ToDoList