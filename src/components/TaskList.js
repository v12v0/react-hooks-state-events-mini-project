import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete, onTaskFormSubmit}) {
  const taskList = tasks.map(task =>
    <Task 
    key={task.text}
    text={task.text}
    category={task.category}
    onDelete={onDelete}
    onTaskFormSubmit={onTaskFormSubmit}
    />
    )
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;