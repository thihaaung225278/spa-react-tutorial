import React, { useState } from 'react'
import './App.css'

export default function App() {

  let [name, setName] = useState('Aung Aung')

  let [posts, setPosts] = useState([
    {
      'id'      : 1,
      'title' : 'Post One'
    },
    {
      'id'      : 2,
      'title' : 'Post Two'
    },
    {
      'id'      : 3,
      'title' : 'Post Three'
    },
    {
      'id'      : 4,
      'title' : 'Post Four'
    },
  ])

  let changeName = function(){
    setName("Maung Maung")
  }

  let deletePost = function(id){
    setPosts((prevState) => prevState.filter( post => post.id !== id ))
  }

  return (
    <div>
      <h1>Hi! {name}</h1>
      <button onClick={changeName}>Change Name...</button>

      <h2>List Items</h2>
      <ul>  
        {/* !! နဲ့ Boolean ပြောင်းပြသွား / condition စစ်ပြသွား */}
        {
            !!posts.length && posts.map(post => (
            <li key={post.id}>{post.title} <button onClick={()=>deletePost(post.id)}>Delete Post</button></li>
        ))
        }
        {
          !posts.length && <h3>There have no posts....</h3>
        }
      </ul>
    </div>

    // video file မှာရှင်းပြသွား ......
  )
}
