const frutas = [
   { "id": 1, "nome": "Maça" },
  { "id": 2, "nome": "Pera" }
]

class FrutasService {
    getAll() {
        return frutas
    }
    getById(id) {
        return frutas.find((fruta) => fruta.id === id)
    }

    updatePatch(id, nome) {
        const index = frutas.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        if(nome){
            frutas[index].nome =nome;
        
        }
        return frutas[index]
    }

    updatePut(id,newData) {
          const index = frutas.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        const updatedFruta = { id: parseInt(id), ...newData };

        frutas[index] = updatedFruta;

        return updatedFruta;
    }

}

export const frutasService = new FrutasService;