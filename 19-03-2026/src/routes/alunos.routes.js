import express from 'express'
import {AlunosService} from '../services/alunos.service'

const routeAlunos = express.Router()

routeAlunos.get("/", (req,res)=>{
    const data = AlunosService.getAll()
    res.json(data)
})

export default routeAlunos