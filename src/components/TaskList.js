import React, {useState} from "react";
import Task from "./Task.js"

function TaskList({tasks}) {
  const [taskList, setTaskList] = useState(tasks);

  function handleDeleteTask(deletedTask){
    const updatedList=taskList.filter((task)=>
      task.text!==deletedTask);
      setTaskList(updatedList);
    
  }
  const taskItems=taskList.map((task, index)=>{
    return (
    <Task 
    key={index}
    text={task.text}
    category={task.category}
    onDelete={handleDeleteTask}
    />
    );
  });
  return (
    <div className="tasks">{taskItems}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
