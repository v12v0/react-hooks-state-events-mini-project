import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState(CATEGORIES);

  function handleDelete(deleteTask) {
    const newTaskList = tasks.filter(task => task.text !== deleteTask)
    setTasks(newTaskList)
  }

  const visibleTaskList = tasks.filter(task => category === "All" || task.category === category)

  function handleTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(category => category !== "All")}
      onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={visibleTaskList}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;