import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let users = [
  { id: 1, name: "rady", text: "hello world" },
  { id: 2, name: "dara", text: "hello world" },
  { id: 3, name: "vira", text: "hello world" },
]
app.get("/api", (req, res) => {
  res.send(users)
})
app.post("/api", (req, res) => {
  const blog = req.body.blog
})

app.listen(4000)
