import React from "react";
import Task from "./Task.js"

function TaskList({tasks, onDeleteTask}) {
  
  
  const taskItems=tasks.map((task, index)=>{
    return (
    <Task 
    key={index}
    text={task.text}
    category={task.category}
    onDelete={onDeleteTask}
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
