const express = require('express')
const app = express()
const port = 3000
let alunos = [
  { id: 1, name: "Xande", age: "16" },
  { id: 2, name: "Pietra", age: "15" },
  { id: 3, name: "Joanna", age: "18" },
  { id: 4, name: "Caua", age: "15" }
]

const frutas = ["Banana", "Maça", "Pera"]

app.get('/', (req, res) => {
  res.send('Alex17!')
})

app.get('/frutas/getAll', (req, res) => {
  res.json({
    sucess: true,
    data: frutas
  })
})

app.get('/alunos/:id', (req, res) => {

  const id = parseInt(req.params.id)
  const aluno = alunos.find(a => a.id === id)
  if (!aluno) {
    return res.status(404).json({
      sucess: false,
      message: 'aluno não encontrado'
    })
  } res.json({
    sucess: true,
    data: aluno
  })
})

//POST - criar novo aluno
app.post('/alunos', (req, res) => {
  const { name, age } = req.body
  if (!name || !age) {
    return res.status(404).json({
      sucess: false,
      message: "Nome e idade são obrigatorios"
    })
  }
})

const novoAluno = {
  id: alunos.length +1,
  name,
  age
}

aluno.push(novoAluno)
res.status(204).json({
  sucess: true,
  data: novoAluno, 
  message: 'Deu certo'
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})