import React, { useState } from "react"
import Screen from "./Screen"
const Calculator = () => {
  const [screen, setScreen] = useState([])
  const [numberValue, setnumberValue] = useState("")

  const addNumberValue = () => {
    setScreen(() => [...screen, { numberValue: numberValue, id: numberValue.toString() }])
  }
  return (
    <div>
      <div className="container">
        <div className="screen">
          <Screen numberValue={numberValue} screen={screen} />
        </div>
        <div className="section">
          <button
            onClick={() => {
              setnumberValue("7")
              addNumberValue("7")
            }}
            className="number">
            7
          </button>
          <button
            onClick={() => {
              setnumberValue("8")
              addNumberValue("8")
            }}
            className="number">
            8
          </button>
          <button
            onClick={() => {
              setnumberValue("9")
              addNumberValue("9")
            }}
            className="number">
            9
          </button>
          <button
            onClick={() => {
              setnumberValue("-")
              addNumberValue("-")
            }}
            className="operator">
            -
          </button>
        </div>
        <div className="section">
          <button
            onClick={() => {
              setnumberValue("4")
              addNumberValue("4")
            }}
            className="number">
            4
          </button>
          <button
            onClick={() => {
              setnumberValue("5")
              addNumberValue("5")
            }}
            className="number">
            5
          </button>
          <button
            onClick={() => {
              setnumberValue("6")
              addNumberValue("6")
            }}
            className="number">
            6
          </button>
          <button
            onClick={() => {
              setnumberValue("+")
              addNumberValue("+")
            }}
            className="operator">
            +
          </button>
        </div>
        <div className="section">
          <button
            onClick={() => {
              setnumberValue("1")
              addNumberValue("1")
            }}
            className="number">
            1
          </button>
          <button
            onClick={() => {
              setnumberValue("2")
              addNumberValue("2")
            }}
            className="number">
            2
          </button>
          <button
            onClick={() => {
              setnumberValue("3")
              addNumberValue("3")
            }}
            className="number">
            3
          </button>
          <button
            onClick={() => {
              setnumberValue("*")
              addNumberValue("*")
            }}
            className="operator">
            *
          </button>
        </div>
        <div className="section">
          <button className="operator">=</button>
          <button
            onClick={() => {
              setnumberValue("0")
              addNumberValue("0")
            }}
            className="number">
            0
          </button>
          <button
            onClick={() => {
              setnumberValue(".")
              addNumberValue(".")
            }}
            className="operator">
            .
          </button>
          <button
            onClick={() => {
              setnumberValue("/")
              addNumberValue("/")
            }}
            className="operator">
            /
          </button>
        </div>
        <div className="clear">
          <button
            onClick={() => {
              setScreen([])
            }}
            className="operator">
            C/A
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
