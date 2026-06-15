import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pegarFrutas = async () => {
    try {
      const res = await fetch()
      const data = await res.json(
        console.log("Frutinhas!", data));
    } catch (error) {
      
    }
  }

  return (
<div>
  <button onClick={pegarFrutas}>Pegar as frutas!</button>
</div>
    
  )
}

export default App
