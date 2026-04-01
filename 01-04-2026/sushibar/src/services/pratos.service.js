const pratos = [
    { id: 1, nome: "Urumaki" },

    { id: 2, nome: "Temaki" },

    { id: 3, nome: "Onigiri" },

    { id: 4, nome: "Skin" }
]

class PratosService {
    getAll() {
        return  pratos
    }
    getById(id) {
        return  pratos.find(( prato) =>  prato.id === id)
    }

    create(nome) {
        const newPratos = {
            id:  pratos.length > 0 ?  pratos[ pratos.length - 1].id + 1 : 1, nome
        }
         pratos.push(newPratos)
        return newPrato
    }
    updatePatch(id, nome) {
        const index =  pratos.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        if(nome){
            pratos[index].nome =nome;
        
        }
        return pratos[index]
    }

    delete(id){
        const index = pratos.findIndex(f=> f.id === parseInt(id))
        if(index === -1) return false;

        pratos.splice(index, 1);
        return true;
    }
}

export const pratosService = new PratosService;