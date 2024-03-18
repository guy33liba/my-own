import React, { useState } from "react"

const Screen = ({ screen }) => {
  const [first, setfirst] = useState("")
  const [second, setsecond] = useState("")
  return (
    <div className="screen">
      {screen.map((item, i) => {
        return (
          <div key={i} className="screenNumbers">
            {item.numberValue}
          </div>
        )
      })}
    </div>
  )
}

export default Screen
