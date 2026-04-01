import express from 'express'
import { pacientesService } from '../services/pacientes.service.js'

const routePacientes = express.Router()

routePacientes.get("/", (req,res)=>{
    const data = pacientesService.getAll()
    res.json(data)

});
routePacientes.get("/:id", (req,res)=>{
    const {id} = req.params;
    const paciente = pacientesService.getById(id)
    if(!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado."})
    } res.json(paciente)
    
});

routePacientes.post("/",(req, res)=>{
    const {nome} = req.body;
    
    if(!nome){
        return res.status(404).json({ message: "É necessario informar um nome para adicionar um paciente."})
    } const newPaciente = pacientesService.create(nome)
    
    res.json(newPaciente)
    
    
});

routePacientes.patch("/:id", (req, res)=>{
    const {id} = req.params;
    const {nome} = req.body;
    
    const pacienteUpdate = pacientesService.updatePatch(id, nome);
    
    if(!pacienteUpdate) {
        return res.status(404).json({ message: "Paciente não encontrado, não foi possivel realizar a atualização."})
    } 
    
    res.json(pacienteUpdate)
    
});

routePacientes.delete("/:id", (req, res)=> {
    const {id} = req.params;
    const deleted = pacientesService.delete(id);
    if(!deleted) {
        return res.status(404).json({ message: "Paciente não encontrado."})
    }
    res.status(204).send();
});

export default routePacientes
