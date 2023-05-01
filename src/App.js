import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PostsList from './components/PostsList'

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


  return (
    <>
      <Navbar />
      <PostsList posts={posts} />
    </>
  )
}
