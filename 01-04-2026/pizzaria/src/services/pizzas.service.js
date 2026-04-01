const pizzas = [
    { id: 1, nome: "Peperonne" },

    { id: 2, nome: "Frango com catupiry" },

    { id: 3, nome: "Calabresa" },

    { id: 4, nome: "Portuguesa" }
]

class PizzasService {
    getAll() {
        return  pizzas
    }
    getById(id) {
        return  pizzas.find(( pizza) =>  pizza.id === id)
    }

    create(nome) {
        const newPizzas = {
            id:  pizzas.length > 0 ?  pizzas[ pizzas.length - 1].id + 1 : 1, nome
        }
         pizzas.push(newPizzas)
        return newPaciente
    }
    updatePatch(id, nome) {
        const index =  pizzas.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        if(nome){
            pizzas[index].nome =nome;
        
        }
        return pizzas[index]
    }

    delete(id){
        const index = pizzas.findIndex(f=> f.id === parseInt(id))
        if(index === -1) return false;

        pizzas.splice(index, 1);
        return true;
    }
}

export const pizzasService = new PizzasService;