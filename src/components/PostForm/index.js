import React, { useRef, useState } from 'react'
import './index.css'

export default function Index({addPost}) {

  // const [title, setTitle] = useState('')

  const title = useRef()

  let restartForm = () => {
    // setTitle('')
    title.current.value = ''
  }

  let submitPost = () => {

    let post = {
      id: Math.floor(Math.random()*10000),
      title: title.current.value
    }
    console.log(post)
    restartForm()
    addPost(post)
  }

  return (
    <form className='PostFrom' onSubmit={submitPost}>
      <h2>Create Post Form</h2>
      <div className="form-control">
        <label htmlFor="create-id">Crate Title</label>
        <input type="text" id='create-title' ref={title} />
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
