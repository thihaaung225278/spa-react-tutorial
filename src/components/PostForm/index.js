import React, { useState } from 'react'
import './index.css'

export default function Index({addPost}) {

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('upcoming')

  let restartForm = () => {
    setTitle('')
  }

  let submitPost = () => {
    let post = {
      id: Math.floor(Math.random()*10000),
      title: title,
      status: status
    }
    restartForm()
    addPost(post)
  }

  return (
    <form className='PostFrom' onSubmit={submitPost}>
      <h2>Create Post Form {status}</h2>
      <div className="form-control">
        <label htmlFor="create-id">Crate Title</label>
        <input type="text" id='create-title' onChange={ (e) => setTitle(e.target.value) } value={title}/>
      </div>

      <div className="form-control">
        <label htmlFor="status">Status</label>
        <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)} >
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      <div className='form-control'>  
        <button type="submit">Create New Post</button>
      </div>
      
    </form>
  )
}
