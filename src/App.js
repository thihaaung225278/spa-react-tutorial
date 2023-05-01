import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PostsList from './components/PostsList'
import Modal from './components/Modal'

export default function App() {

  let [showModal, setShowModal] = useState(false)

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
      <Navbar setShowModal={setShowModal} />
      <PostsList posts={posts} />
      {/* <Modal>
        <h2 className="red-title">Read Modal</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, esse!</p>
      </Modal> */}
      {
        showModal && <Modal>
        <h1 class="blue-title">Testing</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus blanditiis optio impedit accusamus. Beatae tempore, praesentium cum sed accusantium deserunt! Dolor ducimus debitis est dolorum rerum accusamus reprehenderit, corporis voluptatum nam quam ad eos nisi, cupiditate cumque, eius expedita adipisci. Porro consequuntur fugiat laboriosam aspernatur ea quibusdam. Obcaecati, minus mollitia.
        </p>
        <button onClick={()=>setShowModal(false)}>close X</button>
      </Modal>
      }
    </>
  )
}
