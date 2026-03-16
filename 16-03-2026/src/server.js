const express = require('express')
const app = express()
const port = 3000

let frutas = [
  { id: 1, name: "Banana", },
  { id: 2, name: "Maçã" },
  { id: 3, name: "Pera" },
  { id: 4, name: "Pêssego" },
  { id: 5, name: "Tamarindo" }
]

app.get('/', (req, res) => {
  res.send('Alex16-03-2026!')
})


app.get('/frutas/:id', (req, res) => {

  const id = parseInt(req.params.id)
  const fruta = frutas.find(a => a.id === id)
  if (!fruta) {
    return res.status(404).json({
      sucess: false,
      message: 'Fruta não encontrada'
    })
  } res.json({
    sucess: true,
    data: fruta
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})