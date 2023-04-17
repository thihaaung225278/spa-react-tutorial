import logo from './logo.svg';
import Image from './assets/reactjs.jpeg';

import './App.css';

function App() {

  // normal value cannot rerender our component so it cannot change name in component
  // State can rerender for our component , coz we need state
  let name = "Thiha Aung"

  let changeName = () =>{
    name = "Maung Maung"
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
