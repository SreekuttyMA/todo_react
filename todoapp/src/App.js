import React, { useState } from "react";

function TodoList() {
  const [todoItem, setTodo] = useState([
    
  ]);
  const [searchItem, setSearch] = useState("");

const todoSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = { 
      id: todoItem.length + 1,
      text: e.target.todo.value,     
    };
    setTodo([...todoItem, newTodo]) ;
    console.log(newTodo)
    console.log(todoItem)
    e.target.reset();
  };

const todoDelete = (id) => {
    setTodo(todoItem.filter((todo) => todo.id !== id));
  };

const todoSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterTodo = todoItem.filter((todo) =>
    todo.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className='todo-container'>
      <h1>Add Here.......</h1>
      <div className="todo-search">
      <input type="text" value={searchItem} onChange={todoSearch} placeholder="search here....." />
      </div>
      <form onSubmit={todoSubmit} className='input-section'>
        <input type="text" name="todo" />
        <button type="submit">
          Add
        </button>
      </form>

    
      <ul>
        {filterTodo.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <i className="fa-solid fa-trash-can" onClick={() => todoDelete(todo.id)}></i>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TodoList;