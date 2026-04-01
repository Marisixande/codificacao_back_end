import express from 'express'
import { pizzasService } from '../services/pizzas.service.js'

const routePizzas = express.Router()

routePizzas.get("/", (req,res)=>{
    const data = pizzasService.getAll()
    res.json(data)

});
routePizzas.get("/:id", (req,res)=>{
    const {id} = req.params;
    const pizza = pizzasService.getById(id)
    if(!pizza) {
        return res.status(404).json({ message: "Pizza não encontrada."})
    } res.json(pizza)
    
});

routePizzas.post("/",(req, res)=>{
    const {nome} = req.body;
    
    if(!nome){
        return res.status(404).json({ message: "É necessario informar um nome para adicionar uma pizza."})
    } const newPizza = pizzasService.create(nome)
    
    res.json(newPizza)
    
    
});

routePizzas.patch("/:id", (req, res)=>{
    const {id} = req.params;
    const {nome} = req.body;
    
    const pizzaUpdate = pizzasService.updatePatch(id, nome);
    
    if(!pizzaUpdate) {
        return res.status(404).json({ message: "Pizza não encontrada, não foi possivel realizar a atualização."})
    } 
    
    res.json(pizzaUpdate)
    
});

routePizzas.delete("/:id", (req, res)=> {
    const {id} = req.params;
    const deleted = pizzasService.delete(id);
    if(!deleted) {
        return res.status(404).json({ message: "Pizza não encontrada."})
    }
    res.status(204).send();
});

export default routePizzas
