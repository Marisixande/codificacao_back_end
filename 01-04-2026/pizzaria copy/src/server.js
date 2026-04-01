import express from 'express'
import pizzasRoutes from '.../src/routes/pizzasRoutes.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Alex1111!')
})

app.get('/' , (req,res) =>{
  res.json("Pizzaria ne")
})

app.use("/pizzas", pizzasRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})