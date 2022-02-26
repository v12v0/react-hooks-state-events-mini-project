import React,{useState} from "react";

function NewTaskForm({categories ,onTaskFormSubmit}) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("")

  const categoryOptions= categories.map( category => (
    <option
    key={category}
    >
      {category}
    </option>
  ))
    function handleSubmit(e){
      e.preventDefault()
      onTaskFormSubmit({
        key:text,
        text,
        category,
      })
    }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={categories}
        onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;