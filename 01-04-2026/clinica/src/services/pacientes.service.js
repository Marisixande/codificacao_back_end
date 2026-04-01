const pacientes = [
    { id: 1, nome: "Maria" },

    { id: 2, nome: "Edio" },

    { id: 3, nome: "Joanna" },

    { id: 4, nome: "Pietra" }
]

class PacientesService {
    getAll() {
        return pacientes
    }
    getById(id) {
        return pacientes.find((paciente) => paciente.id === id)
    }

    create(nome) {
        const newPaciente = {
            id: pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1, nome
        }
        pacientes.push(newPaciente)
        return newPaciente
    }
    updatePatch(id, nome) {
        const index = pacientes.findIndex((f)=>f.id === parseInt(id));
        if(index === -1) return null;
        if(nome){
            pacientes[index].nome =nome;
        
        }
        return pacientes[index]
    }

    delete(id){
        const index = pacientes.findIndex(f=> f.id === parseInt(id))
        if(index === -1) return false;

        pacientes.splice(index, 1);
        return true;
    }
}

export const pacientesService = new PacientesService;