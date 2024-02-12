import React, { useState } from "react"
import "./SearchBar.css"
const SerachBar = () => {
  const [input, setinput] = useState("")
  const [newname, setNewname] = useState("")
  const array = [
    "Time",
    "Past",
    "Future",
    "Dev",
    "Fly",
    "Flying",
    "Soar",
    "Soaring",
    "Power",
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Head",
    "Theme",
    "Grand",
    "Cool",
    "Kid",
    "Boy",
    "Girl",
    "Vortex",
    "Paradox",
    "Hello World",
    "Inter Cooler",
  ]

  const found = array.filter((item) => item.toLowerCase().includes(input))
  const generateName = () => {
    const newGeneratedName = array[Math.floor(Math.random() * found.length)]
    setNewname(() => newGeneratedName)
  }

  return (
    <div>
      <div className="container">
        <div>
          <div>
            <input className="input" type="text" value={input} onChange={(e) => setinput(e.target.value)} />
          </div>
          <div className="found-list search-list">
            {found.map((item, i) => {
              return (
                <div key={i} className="found-item">
                  {item} <hr />
                </div>
              )
            })}
          </div>
        </div>
        <div className="generate">
          <button onClick={() => generateName()}>generate</button>
          <div className="new-name">{newname ? newname : "enter a name"}</div>
        </div>
      </div>
    </div>
  )
}

export default SerachBar
