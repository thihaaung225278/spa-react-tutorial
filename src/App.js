import React from 'react'
import { useState } from 'react'

export default function App() {

  let [count, setCount] = useState(0)

  // we should not use to original state data (count)
  let incrementCount = () =>{

    // we think that is increase 4 the following code , but it not increase 4 , just only increase 1 because we use original state(count)

    // Should not write this way
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    // should write this way
    setCount((prevStateCount) => prevStateCount + 1 )
    setCount((prevStateCount) => prevStateCount + 1 )
    setCount((prevStateCount) => prevStateCount + 1 )
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count  - {count}</h3>
      <button onClick={incrementCount}>increment</button>
    </div>
  )
}
