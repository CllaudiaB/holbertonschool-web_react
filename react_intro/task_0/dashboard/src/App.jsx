import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="App-header">
        <img src="./assets/holberton-logo.jpg" alt="holberton logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div class="App-footer">
        <p><i>Copyright 2024 - holberton School</i></p>
      </div>
    </>
  )
}

export default App
