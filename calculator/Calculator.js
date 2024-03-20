import React, { useState } from "react"

const Calculator = () => {
  const [operation, setOperation] = useState("")
  const [current, setCurrent] = useState("")
  const [previous, setPrevious] = useState("")

  const addDigitToOutput = (num) => {
    if (current.includes(".") && num === ".") return current
    setCurrent((prev) => prev + num)
  }
  const addOperationToOutput = (num) => {
    setOperation(num)
    if (current != null) {
      setPrevious(() => current)
    }
    computation(current, previous)
  }

  const computation = (num1, num2, operator) => {
    let result = ""

    switch (operator) {
      case "+":
        return (result = parseInt(num1) + parseInt(num2))
      case "-":
        return (result = parseInt(num1) - parseInt(num2))
      case "*":
        return (result = parseInt(num1) * parseInt(num2))
      case "/":
        return (result = parseInt(num1) / parseInt(num2))
      default:
        return num1
    }
  }
  return (
    <div>
      <div className="container">
        <div className="output">
          <div className="prev">
            {previous}
            {operation}
          </div>
          <div className="current">{current}</div>
        </div>
        <div className="buttons">
          <div className="section">
            <button
              onClick={() => {
                setCurrent("")
                setPrevious("")
                setOperation("")
              }}
              className="button AC">
              AC
            </button>
            <button onClick={() => setCurrent(current.slice(0, -1))} className="button operation">
              DEL
            </button>
            <button onClick={() => addOperationToOutput("/")} className="button operation">
              /
            </button>
          </div>
          <div className="section">
            <button onClick={() => addDigitToOutput("9")} className="button">
              9
            </button>
            <button onClick={() => addDigitToOutput("8")} className="button">
              8
            </button>
            <button onClick={() => addDigitToOutput("7")} className="button">
              7
            </button>
            <button onClick={() => addOperationToOutput("-")} className="button operation">
              -
            </button>
          </div>
          <div className="section">
            <button onClick={() => addDigitToOutput("6")} className="button">
              6
            </button>
            <button onClick={() => addDigitToOutput("5")} className="button">
              5
            </button>
            <button onClick={() => addDigitToOutput("4")} className="button">
              4
            </button>
            <button onClick={() => addOperationToOutput("*")} className="button operation">
              *
            </button>
          </div>
          <div className="section">
            <button onClick={() => addDigitToOutput("3")} className="button">
              3
            </button>
            <button onClick={() => addDigitToOutput("2")} className="button">
              2
            </button>
            <button onClick={() => addDigitToOutput("1")} className="button">
              1
            </button>
            <button onClick={() => addOperationToOutput("+")} className="button operation">
              +
            </button>
          </div>
          <div className="section">
            <button onClick={() => addDigitToOutput("0")} className="button">
              0
            </button>
            <button onClick={() => addDigitToOutput(".")} className="button operation">
              .
            </button>
            <button className="button equals" onClick={() => computation(current, previous)}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
