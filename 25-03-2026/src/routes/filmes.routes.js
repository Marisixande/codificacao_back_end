import express from 'express'
import { filmesService } from '../services/filmes.service.js'

const routeFilmes = express.Router()

routeFilmes.get("/", (req, res) => {
    res.json(filmesService.getAll())
})

routeFilmes.get("/:id", (req, res) => {
    const { id } = req.params
    const filme = filmesService.getById(id)

    if ((!filme)) {
        res.status(404).json({ message: "Filme não encontrado" })
    }
    res.json(filme)
})

export default routeFilmes