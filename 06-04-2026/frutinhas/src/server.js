import express from 'express'
import fruitsRoutes from '.../src/routes/fruitsRoutes.js'
const app = express()
const port = 3000

app.use(express.json())

app.get('/' , (req,res) =>{
  res.json("frutas aff")
})

app.use("/fruits", fruitsRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})