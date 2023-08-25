import { useState } from 'react'
import Pagina from './pagina.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Cabeçalho</h1>
      <Pagina/>
      <h2>Rodapé</h2>
      <div> João pedro viegas naves<br>Sandra menezes</br></div>
    </>
  )
}

export default App
