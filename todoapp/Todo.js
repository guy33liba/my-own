import React, { useState } from "react"

const Todo = ({ item, editTask }) => {
  const [editInput, setEditInput] = useState("")
  const handleSubmit = () => {
    editTask(editInput, item.id)
  }
  return (
    <div key={item.id} style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
        placeholder="update todo"
      />
      <button onClick={() => handleSubmit(item.id)}>update Button and close it</button>
    </div>
  )
}

export default Todo
