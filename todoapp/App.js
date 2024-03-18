import { useEffect, useState } from "react"
import "./App.css"
import Todo from "./Todo"
import axios from "axios"
import ServerList from "./ServerList"
function App() {
  const [serverList, setServerList] = useState([])
  const [array, setarray] = useState([])
  const [input, setinput] = useState("")
  const [title, setTitle] = useState("")
  const [task, setTask] = useState("")

  const url = "http://localhost:4000"
  const postRequest = () => {
    axios.post(url, { title, task })
    setarray([...array, { title: title, task: task }])
    setTitle("")
    setTask("")
  }
  const getRequest = () => {
    axios.get(url).then((response) => {
      setServerList(response.data)
    })
  }
  useEffect(() => {
    getRequest()
  }, [])
  function setit() {
    setarray((prev) => [...prev, { input, edit: false, complete: false, id: array.length }])
    setinput("")
  }
  const setcheckBox = (id) => {
    setarray(array.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo)))
  }
  function setedit(id) {
    setarray(array.map((todo) => (todo.id === id ? { ...todo, edit: !todo.edit } : todo)))
  }
  const editTask = (task, id) => {
    setarray(
      array.map((item) => (item.id === id ? { ...item, input: task, edit: !item.edit } : item)),
    )
  }
  console.log(array)
  return (
    <div>
      <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <input
          type="text"
          style={{ marginBottom: "20px", marginLeft: "20px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          style={{ marginBottom: "20px", marginLeft: "20px" }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => postRequest()}>add todo</button>
        <div>
          {serverList.map((item, index) => {
            return <ServerList key={index} item={item} />
          })}
        </div>
      </div>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      <button onClick={() => setit()}>set</button>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid gray",
          height: "400px",
          display: "flex",
          flexWrap: "wrap",
        }}>
        {array.map((item, index) => {
          return item.edit ? (
            <Todo item={item} editTask={editTask} />
          ) : (
            <div>
              <div key={index} style={{ marginTop: "10px", display: "flex" }}>
                <div style={{ marginLeft: "20px" }}>{item.input}</div>
                <button style={{ marginLeft: "20px" }} onClick={() => setedit(item.id)}>
                  edit
                </button>
                <input
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => setcheckBox(item.id)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
