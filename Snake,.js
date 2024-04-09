import React, { useState } from "react"
import { useEffect } from "react"

const Snake = () => {
  const [board, setBoard] = useState(Array(240).fill(null))
  let [snakePosition, setSnakePosition] = useState(25)
  const [snakeBody, setsnakeBody] = useState([])
  const [foodPosition, setFoodPosition] = useState(12)
  let [food, setFood] = useState()
  const handleClick = (index) => {
    const newBoard = [...board]
    setSnakePosition(index)
    newBoard = snakePosition
    setBoard(newBoard)
  }

  const moveIndex = (e) => {
    console.log(snakePosition)
    switch (e.key) {
      case "ArrowUp":
        setSnakePosition((prevPosition) => (prevPosition - 16 >= 0 ? prevPosition - 16 : prevPosition))
        break
      case "ArrowDown":
        setSnakePosition((prevPosition) => (prevPosition + 16 < 240 ? prevPosition + 16 : prevPosition))
        break
      case "ArrowRight":
        setSnakePosition((prevPosition) => ((prevPosition + 1) % 16 !== 0 ? prevPosition + 1 : prevPosition))
        break
      case "ArrowLeft":
        setSnakePosition((prevPosition) => (prevPosition ) % 16 !== 0 ? prevPosition - 1 : prevPosition)
        break
    }
  }
  const foodHandler = () => {
    if (foodPosition === snakePosition) {
      setFoodPosition(Math.floor(Math.random() * 200))
      setsnakeBody((prev) => [...prev, snakePosition])
    }
  }
  useEffect(() => {
    foodHandler()
  }, [foodPosition === snakePosition])
  return (
    <div>
      <div style={{ display: "flex", width: "700px", height: "400px", flexWrap: "wrap", marginBottom: "200px" }}>
        {board.map((square, index) => {
          if (index === snakePosition || snakeBody.includes(index)) {
            return (
              <div
                key={index}
                tabIndex={0}
                onKeyDown={moveIndex}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid black",
                  backgroundColor: "green",
                }}
              ></div>
            )
          } else if (foodPosition === index) {
            return (
              <div
                key={index}
                style={{ width: "40px", height: "40px", border: "1px solid black", backgroundColor: "red" }}
              ></div>
            )
          } else {
            return (
              <div
                key={index}
                tabIndex={0}
                onKeyDown={moveIndex}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid black",
                  backgroundColor: "white",
                }}
              ></div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Snake
