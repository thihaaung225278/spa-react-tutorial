import React, { useState } from 'react'
import './index.css'

export default function Index({addPost}) {

  const [title, setTitle] = useState('')

  let restartForm = () => {
    setTitle('')
  }

  let submitPost = () => {
    let post = {
      id: Math.floor(Math.random()*10000),
      title: title
    }
    restartForm()
    addPost(post)
  }

  return (
    <form className='PostFrom' onSubmit={submitPost}>
      <h2>Create Post Form</h2>
      <div className="form-control">
        <label htmlFor="create-id">Crate Title</label>
        <input type="text" id='create-title' onChange={ (e) => setTitle(e.target.value) } value={title}/>
      </div>

      <div className='form-control'>  
        <button type="submit">Create New Post</button>
      </div>
      {/* <div className="form-control">
        <button onClick={restartForm}>Restart</button>
      </div> */}
    </form>
  )
}
