import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function suma8() {
    if (count < 200) {
      setCount(count + 8)
    }
    else {
      alert('El limite es de 200 no lo puedes pasar')
    }
  }

  function resta8() {
    if (count > -200) {
      setCount(count - 8)
    }
    else {
      alert('El limite es de -200 no lo puedes pasar')
    }
  }

  function aumentar() {
    if (count < 200) {
      setCount(count + 1)
    }
    else {
      alert('El limite es de 200 no lo puedes pasar')
    }
  }

  function restar() {
    if (count > -200) {
      setCount(count - 1)
    }
    else {
      alert('El limite es de -200 no lo puedes pasar')
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={resta8}> -8 </button>
        <button onClick={restar}> - </button>
        <button >
          count is {count}
        </button>
        <button onClick={aumentar}> + </button>
        <button onClick={suma8}> +8 </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App