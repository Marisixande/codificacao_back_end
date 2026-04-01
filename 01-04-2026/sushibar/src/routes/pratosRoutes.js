import express from 'express'
import { pratosService } from '../services/pratos.service.js'

const routePratos = express.Router()

routePratos.get("/", (req,res)=>{
    const data = pratosService.getAll()
    res.json(data)

});
routePratos.get("/:id", (req,res)=>{
    const {id} = req.params;
    const prato = pratosService.getById(id)
    if(!prato) {
        return res.status(404).json({ message: "Prato não encontrado."})
    } res.json(prato)
    
});

routePratos.post("/",(req, res)=>{
    const {nome} = req.body;
    
    if(!nome){
        return res.status(404).json({ message: "É necessario informar um nome para adicionar um prato."})
    } const newPrato = pratosService.create(nome)
    
    res.json(newPrato)
    
    
});

routePratos.patch("/:id", (req, res)=>{
    const {id} = req.params;
    const {nome} = req.body;
    
    const pratoUpdate = pratosService.updatePatch(id, nome);
    
    if(!pratoUpdate) {
        return res.status(404).json({ message: "Prato não encontrado, não foi possivel realizar a atualização."})
    } 
    
    res.json(pratoUpdate)
    
});

routePrato.delete("/:id", (req, res)=> {
    const {id} = req.params;
    const deleted = pratosService.delete(id);
    if(!deleted) {
        return res.status(404).json({ message: "Prato não encontrado."})
    }
    res.status(204).send();
});

export default routePratos
