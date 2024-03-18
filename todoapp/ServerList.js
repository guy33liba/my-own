import React from "react"

const ServerList = ({ item }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
          marginLeft: "20px",
          width: "30%",
          border: "1px solid gray",
        }}>
        <div>{item.title}</div>
        <div>{item.task}</div>
      </div>
    </div>
  )
}

export default ServerList
