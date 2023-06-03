import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {

  let [showModal, setShowModal] = useState(false)

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post One (1)"
    },
    {
      id: 2,
      title: "Post One (2)"
    },
    {
      id: 3,
      title: "Post One (3)"
    },
  ]) 

  return (
    <div className="app">
      <Navbar setShowModal={setShowModal} />
      <PostList posts={posts}/>
      {
        showModal
        &&
        <Modal theme={true}>
          <h2>Modal</h2>
          <p>
          t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      }
    </div>
    
  );
}

export default App;
