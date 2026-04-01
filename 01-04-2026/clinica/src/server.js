import express from 'express'
import pacientesRoutes from '.../src/routes/pacientesRoutes.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Alex1111!')
})

app.get('/' , (req,res) =>{
  res.json("clinica ne")
})

app.use("/pacientes", pacientesRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})