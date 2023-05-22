import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  function handleLess() {
    setNumber(number - 1)
  }

  function handleMore() {
    setNumber(number + 1)
  }

  return (
    <>
      <button onClick={handleLess}>-</button>
      <div>{number}</div>
      <button onClick={handleMore}>+</button>
    </>
  )
}

export default App
