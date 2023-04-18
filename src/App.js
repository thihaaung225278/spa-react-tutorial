import logo from './logo.svg';
import Image from './assets/reactjs.jpeg';

import './App.css';
import { useState } from 'react';

function App() {

  let [name, setName] = useState("Thiha Aung")

  let [posts, setPosts] = useState([
    {
      "id": 1,
      "title": "Post One"
    },
    {
      "id": 2,
      "title": "Post Two"
    },
    {
      "id": 3,
      "title": "Post Three"
    }
  ])

  let changeName = () =>{
    setName("Maung Maung")
    console.log(name)
  }

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
