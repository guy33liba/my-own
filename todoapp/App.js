import React, { useState } from "react"
import Todo from "./Todo"

const App = () => {
  const [input, setinput] = useState("")
  const [array, setArray] = useState([])
  const [editinput, setEditinput] = useState("")

  const addtothearray = () => {
    setArray([...array, { input, edit: false, id: array.length, completed: false }])
    setinput("")
  }
  const setEdit = (id) => {
    setArray(array.map((item) => (item.id === id ? { ...item, edit: !item.edit } : item)))
  }
  const filtered = (id) => {
    const filterdArray = array.filter((todo) => todo.id !== id)
    setArray(filterdArray)
  }
  const seteditinput = (id) => {
    setArray(() => {
      array.map((item) => (item.id === id ? { ...item, input: editinput } : item))
    })
  }
  const setCheckbox = (id) => {
    array.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      <button onClick={() => addtothearray()}>add todo</button>
      <div>
        {array.map((todo, i) => {
          return todo.edit ? (
            <div key={i}>
              <input type="text" value={editinput} onChange={(e) => setEditinput(e.target.value)} />
              <button
                onClick={() => {
                  seteditinput(todo.id)
                }}
              >
                validate
              </button>
            </div>
          ) : (
            <div key={i}>
              {todo.input}

              <button
                onClick={() => {
                  filtered(todo.id)
                  console.log(todo.id)
                }}
              >
                remove{" "}
              </button>
              <button
                onClick={() => {
                  console.log(todo)
                  setEdit(todo.id)
                }}
              >
                edit{" "}
              </button>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  setCheckbox(todo.id)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
