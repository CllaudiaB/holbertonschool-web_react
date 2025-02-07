import { useState } from 'react'
import holbertonLogo from "./assets/holberton-logo.jpg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="App-header">
        <img src={holbertonLogo} alt="holberton logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div class="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </div>
    </>
  )
}

export default App
