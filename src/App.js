import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = tasks.filter((_, i) => i !== index);
    setTasks(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="titleName">To-Do List</h1>
      <div>
        <input
          className="Add_Input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="Add_Button" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>

      <div className="List">
        <ul className="App_List">
          {tasks.map((task, index) => (
            <li className="List_Element" key={index}>
              <p>{task}</p>
              <button className="Element_Button" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
