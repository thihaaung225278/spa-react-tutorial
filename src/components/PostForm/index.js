import React, { useState } from 'react'
import './index.css'

export default function Index() {

  const [title, setTitle] = useState('')

  return (
    <form className='PostFrom'>
      <h2>Create Post Form</h2>
      <div className="form-control">
        <label htmlFor="create-id">Crate Title</label>
        <input type="text" id='create-title' onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        {title}
      </div>
      <div className='form-control'>
        <button>Create New Post</button>
      </div>
    </form>
  )
}
