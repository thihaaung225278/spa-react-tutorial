import React from 'react'
import './App.css'
import { useState } from 'react'

export default function App() {

  // let name = "Thiha Aung";
  let [name, setName] = useState("Thiha Aung")

  let [posts, setPosts] = useState([
    {
      'id': 1,
      'title': 'Post One'
    },
    {
      'id': 2,
      'title': 'Post Two'
    },
    {
      'id': 3,
      'title': 'Post Three'
    },
    {
      'id': 4,
      'title': 'Post Four'
    },
    {
      'id': 5,
      'title': 'Post Five'
    }
  ]);

  let changeName = () =>{
    setName('Maung Maung')
  }

  // how to use prevState (we should not change to the original posts)
  // should we use to prevState
  let deletePost = (id) =>{
    setPosts((prevState) => prevState.filter( post => post.id != id ))
  }

  return (
    <div className="app">
      <h1>My name is <span>{name}</span></h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      {/* we need to add param at onClick function , should we use function reference pass way */}
      <ul className="post-list">
        {posts.map( post => <li key={post.id}>{post.title} <button onClick={()=>deletePost(post.id)}>Delete</button></li> )}
      </ul>

    </div>
  )
}
