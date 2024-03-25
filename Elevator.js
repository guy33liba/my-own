import { useState, useEffect } from "react"
import "./App.css"
import Elevator from "./Elevator"
const App = () => {
  const [elevators, setElevators] = useState([
    { id: 1, floor: Math.floor(Math.random() * 5), destination: Math.floor(Math.random() * 5), direction: "up" },
    { id: 2, floor: Math.floor(Math.random() * 5), destination: Math.floor(Math.random() * 5), direction: "up" },
    { id: 3, floor: Math.floor(Math.random() * 5), destination: Math.floor(Math.random() * 5), direction: "up" },
    { id: 4, floor: Math.floor(Math.random() * 5), destination: Math.floor(Math.random() * 5), direction: "up" },
    { id: 5, floor: Math.floor(Math.random() * 5), destination: Math.floor(Math.random() * 5), direction: "up" },
  ])
  const [levels, setLevels] = useState([5, 4, 3, 2, 1, 0])

  const goToFloor = (elevatorId, floor) => {
    setElevators((prevElevators) =>
      prevElevators.map((elevator) => {
        return elevator.id === elevatorId ? { ...elevator, floor } : elevator
      })
    )
  }
  const handleRequest = (floor) => {
    const highestFloor = Math.max(...levels)
    const lowestFloor = Math.min(...levels)

    const requestedFloor = Math.min(Math.max(floor, lowestFloor), highestFloor)
    const direction = requestedFloor > lowestFloor ? "up" : "down"
    const nearestElevator = elevators.reduce((nearest, elevator) => {
      //
      const nearestDistance = Math.abs(nearest.floor - requestedFloor)
      const elevatorDistance = Math.abs(elevator.floor - requestedFloor)
      //
      const sameDirection = elevator.direction === direction || elevator.floor === floor
      //
      if ((direction === "up" && elevator.floor <= floor) || (direction === "down" && elevator.floor >= floor)) {
        return elevatorDistance < nearestDistance && sameDirection ? elevator : nearest
      }
      return nearestDistance <= elevatorDistance ? nearest : elevator
    })
    goToFloor(nearestElevator.id, requestedFloor)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setElevators((prevElevators) =>
        prevElevators.map((elevator) => {
          if (elevator) {
            if (elevator.floor === elevator.destination) {
              const nextFloor = elevator.direction === "up" ? elevator.floor + 1 : elevator.floor - 1
              if (nextFloor >= 0 && nextFloor <= 5) {
                const nextDirection =
                  nextFloor === levels[0]
                    ? (elevator.direction = "up")
                    : nextFloor === levels[levels.length - 1]
                    ? (elevator.direction = "down")
                    : elevator.direction
                return { ...elevator, floor: nextFloor, direction: nextDirection, destination: nextFloor }
              } else {
                elevator.direction = elevator.direction === "up" ? "down" : "up"
                const nextFloor = elevator.direction === "up" ? elevator.floor + 1 : elevator.floor - 1
                return { ...elevator, floor: nextFloor }
              }
            }
          }
          return elevator
        })
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [elevators, levels])

  return (
    <div>
      <h1>Elevator App</h1>
      <div className="allWebPage">
        <div className="sideBar">
          {levels.map((level, i) => {
            return (
              <button key={i} onClick={() => handleRequest(level)}>
                {level}
              </button>
            )
          })}
        </div>
        <div className="container">
          <div className="upper">
            <div className="elevators" style={{ display: "flex", height: "200px", justifyContent: "space-around" }}>
              {elevators.map((elevator) => {
                return <Elevator key={elevator.id} id={elevator.id} floor={elevator.floor} goToFloor={goToFloor} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
