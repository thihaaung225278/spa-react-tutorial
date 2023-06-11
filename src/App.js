import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import { useState } from 'react';
import Modal from './components/Modal';
import PostForm from './components/PostForm'

function App() {

  let [showModal, setShowModal] = useState(false)

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post One (1)",
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Post One (2)",
      status: "Dropped"
    },
    {
      id: 3,
      title: "Post One (3)",
      status: "Dropped"
    },
  ]) 

  let addPost = (post) => {
    setPosts( prevState => [...prevState, post] )
    setShowModal(false)
  }

  // git testing....
  return (
    <div className="app">
      <Navbar setShowModal={setShowModal} />
      <PostList posts={posts}/>
      {
        showModal
        &&
        <Modal theme={true} setShowModal={setShowModal}>
          <PostForm addPost={addPost} />
        </Modal>
      }
    </div>
    
  );
}

export default App;
