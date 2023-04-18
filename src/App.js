import logo from './logo.svg';
import Image from './assets/reactjs.jpeg';

import './App.css';
import { useState } from 'react';

function App() {

  // useState Hook return [] with getter and setter like that [getter, setter]
  // virtual dom compare with original state and changed state with some data is change

  let [name, setName] = useState("Thiha Aung")

  let changeName = () =>{
    setName("Maung Maung")
    console.log(name)
  }

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
    
  );
}

export default App;
