import React, { useRef, useState } from "react"

const Screen = ({ screen, operatorClass, numbersClass }) => {
  const [first, setfirst] = useState("")
  const [second, setsecond] = useState("")
  const [firstOrSecondNumber, setFirstOrSecondNumber] = useState(false)
  const ref = useRef(null)
  const handleClick = (e) => {
    e.current = screen.numberValue
    console.log(e)
  }
  return (
    <div className="screen">
      {screen.map((item, i) => {
        return (
          <div key={i} className="screenNumbers">
            <div ref={ref} onClick={() => handleClick(item.id)}>
              {item.numberValue}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Screen
