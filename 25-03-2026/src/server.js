const express = require('express')
import {routeFilmes} from '../src/routes/filmes.routes.js'
const app = express()
const port = 3000
app.get('/', (req, res) => {
})

app.use('/filmes', routeFilmes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})