import "./ExpenseTracker.css"
import React, { useEffect, useState } from "react"
const ExpenseTracker = () => {
  const [container, setContainer] = useState([])
  let [input, setinput] = useState("")
  const [balance, setBalance] = useState(0)
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [cost, setCost] = useState("")

  const addValue = (id) => {
    if (input) {
      setContainer([...container, { input: input, id: container.length, cost: cost }])
      if (cost > 0 || expense > 0) {
        setExpense(() => parseInt(cost) + parseInt(expense))
      }
    } else {
      input = "no name"
    }
    setinput("")
    setCost("")
  }
  const changeColor = (id) => {
    const find = container.find((c) => c.id === id)
  }
  const incomeCalc = () => {
    if (cost < 0) {
      const absoluteNumber = Math.abs(cost)
      setIncome((prev) => prev + absoluteNumber)
    }
  }
  const balanceBudget = () => {
    setBalance(() => income - expense)
  }
  const filterTransaction = (e) => {
    setContainer(container.filter((item) => item !== e))
  }
  useEffect(() => {
    balanceBudget()
  }, [income, expense])
  return (
    <div>
      <div
        style={{
          marginLeft: "80px",
          borderRadius: "10px",
          width: "80%",
          border: "1px solid black",
          padding: "20px",
        }}>
        <h1>expense tracker</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className={balance >= 0 ? "green" : "red"} onChange={(e) => setBalance(e.target.value)}>
            Balance : {balance}{" "}
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              border: "1px solid black",
              width: "250px",
              height: "100px",
              padding: "10px",
              fontSize: "30px",
            }}>
            expense
            <div style={{ color: "red", fontWeight: "800" }}>&euro; {expense}</div>
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "250px",
              height: "100px",
              textAlign: "inherit",
              fontSize: "30px",
              padding: "10px",
            }}>
            income
            <p style={{ color: "green", fontWeight: "800" }}>&euro; {income}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>
            <button
              style={{
                height: "40px",
                width: "300px",
                textAlign: "center",
                borderRadius: "10px",
                background: "#77EE90",
              }}
              onClick={() => {
                addValue()
                balanceBudget()
                incomeCalc()
                changeColor(container.id)
              }}>
              ADD TRANSACTION
            </button>
          </p>
        </div>
        <div>
          <h1 style={{ marginLeft: "100px" }}>Transactions</h1>
          <div>
            <div style={{ textAlign: "center" }}>
              <input
                type="text"
                style={{
                  background: "lightgray",
                  borderRadius: "10px",
                  marginLeft: "100px",
                  height: "50px",
                  color: "blue",
                  width: "270px",
                  fontSize: "25px",
                  textAlign: "center",
                }}
                onChange={(e) => setinput(e.target.value)}
                value={input}
                placeholder="New Transaction Name"
              />
              {
                <input
                  type="number"
                  style={{
                    background: "lightgray",
                    borderRadius: "10px",
                    marginLeft: "100px",
                    height: "50px",
                    width: "270px",
                    color: "blue",
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    setCost(e.target.value)
                  }}
                  value={cost}
                  placeholder=" Transaction value"
                />
              }
            </div>
            <div style={{}}>
              {container.map((item, i) => {
                return (
                  <div
                    key={i}
                    id={i}
                    style={{
                      display: "flex",
                      marginLeft: "40px",
                      width: "100%",
                      justifyContent: "space-around",
                    }}>
                    <h2> {item.input}</h2>
                    <h2>&euro; {item.cost > 0 && item.cost}</h2>
                    <button
                      onClick={() => filterTransaction(item)}
                      style={{
                        marginTop: "25px",
                        background: "lightgreen",
                        borderRadius: "10px",
                        height: "30px",
                      }}>
                      Remove
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker
