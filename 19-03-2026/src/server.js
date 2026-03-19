import express from 'express'
import {routeAlunos} from '../src/routes/alunos.routes'
const app = express()
const port = 3000

app.get('/', (req, res) => {
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//DB > Service > Routes > server.js