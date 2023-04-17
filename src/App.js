import logo from './logo.svg';
import Image from './assets/reactjs.jpeg';

import './App.css';

function App() {

  let name = "Thiha Aung"

  return (
    <div className="app">
      <h1>Hello {name}</h1>
      {/* 1st way (public folder way) */}
      {/* absolute path */}
      {/* <img src="http://localhost:3000/reactjs.jpg" alt="image" /> */}
      {/* relative path */}
      {/* <img src="/reactjs.jpg" alt="image" /> */}

      {/* 2nd way - import way (many people using this way) */}
      <img src={Image} alt="reactjs" />
    </div>
    
  );
}

export default App;
