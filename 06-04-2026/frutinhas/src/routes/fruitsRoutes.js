import express from 'express'
import { frutasService } from '../services/fruits.service.js'

const routeFrutas = express.Router()

routeFrutas.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    const frutaUpdate = frutasService.updatePatch(id, nome);

    if (!frutaUpdate) {
        return res.status(404).json({ message: "Fruta não encontrada, não foi possivel realizar a atualização." })
    }

    res.json(frutaUpdate)

});

routeFrutas.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    
    if (!nome) {
        return res.status(404).json({ message: "Dados insuficientes, o campo nome é obrigatorio." })
    }

    const frutaUpdated = frutasService.updatedPut(id, {nome});
    
    res.json(frutaUpdated)

});

export default routeFrutas
