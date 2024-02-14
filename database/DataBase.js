import React, { useEffect, useState } from "react"
import "./DataBase.css"
import axios from "axios"
const DataBase = () => {
  const [blogList, setBlogList] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [blog, setBlog] = useState("")

  const url = "localhost:4000/api"

  async function fetchapi() {
    try {
      const response = await axios.get(url, { title: title, author: author, blog: blog })
      console.log(response)
    } catch (error) {}
  }
  useEffect(() => {
    fetchapi()
  }, [blogList])

  const addBlog = (e) => {
    e.preventDefault()
    setBlogList([...blogList, { title: title, blog: blog, author: author }])
    setBlog("")
    setTitle("")
    setAuthor("")
  }

  return (
    <div>
      <form onSubmit={addBlog}>
        <div className="block">
          <div>
            <div className="header">Title</div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <div className="header">Blog List</div>
            <input type="text" value={blog} onChange={(e) => setBlog(e.target.value)} />
          </div>
          <div>
            <div className="header">Author</div>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="container-blog">
            {blogList.map((item, i) => {
              return (
                <div key={i}>
                  <div className="item">Title: {item.title}</div>
                  <div className="item">Author: {item.author}</div>
                  <div className="item">Blog: {item.blog}</div>
                </div>
              )
            })}
          </div>
          <button className="button" onClick={(e) => addBlog(e)}>
            Add Blog
          </button>
        </div>
      </form>
    </div>
  )
}

export default DataBase
