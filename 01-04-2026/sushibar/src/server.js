import express from 'express'
import pratosRoutes from '.../src/routes/pratosRoutes.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Alex1111!')
})

app.get('/' , (req,res) =>{
  res.json("Sushibar ne")
})

app.use("/pratos", pratosRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})