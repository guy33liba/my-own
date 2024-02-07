import React, { useState } from "react"
import "./Todolist.css"
const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [input, setinput] = useState("")

  const addTodobyValue = () => {
    setTodos([...todos, input])
    setinput("")
  }
  const deleteTodo = (e) => {
    const filter = todos.filter((todo) => todo !== e)
    setTodos(filter)
  }
  return (
    <div className="todolist">
      <h1 className="header">TODO LIST </h1>
      <div>
        <input type="text" className="input" value={input} onChange={(e) => setinput(e.target.value)} />
        <button className="add" onClick={() => addTodobyValue()}>
          add todo
        </button>
      </div>
      <div className="container">
        {todos.map((todo, index) => {
          return (
            <p  key={index} className="todos-content">
              <h2>{todo}</h2>
              <main>
                <button onClick={() => deleteTodo(todo)} className="edit-button">
                  edit
                </button>
                <button onClick={() => deleteTodo(todo)} className="delete-button">
                  delete
                </button>
              </main>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
