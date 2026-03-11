const express = require('express')
const app = express()
const port = 3000
const users = [
  {id: 1, name: "Xande", age: "16"},
  {id: 2, name: "Pietra", age: "15"},
  {id: 3, name: "Joanna", age: "18"},
  {id: 3, name: "Caua", age: "15"}
]

const frutas = ["Banana", "Maça", "Pera"]

app.get('/', (req, res) => {
  res.send('Alex222!')
})

app.get('/uses/getAll' , (req,res) =>{
  res.json({
    sucess: true,
    data: users
  })
})

app.get('/frutas/getAll' , (req,res)=>{
  res.json({
    sucess: true,
    data: frutas
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})