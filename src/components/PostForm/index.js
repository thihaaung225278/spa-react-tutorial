import React, { useState } from 'react'
import './index.css'

export default function Index() {

  const [title, setTitle] = useState('')

  let restartForm = () => {
    setTitle('')
  }

  return (
    <form className='PostFrom'>
      <h2>Create Post Form</h2>
      <div className="form-control">
        <label htmlFor="create-id">Crate Title</label>
        <input type="text" id='create-title' onChange={ (e) => setTitle(e.target.value) } value={title}/>
      </div>
      <div>
        {title}
      </div>
      <div className='form-control'>  
        <button>Create New Post</button>
      </div>
      <div className="form-control">
        <button onClick={restartForm}>Restart</button>
      </div>
    </form>
  )
}
