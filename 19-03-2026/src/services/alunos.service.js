const alunos = [
  {id: 1, name: "Xande", age: "16"},
  {id: 2, name: "Pietra", age: "15"},
  {id: 3, name: "Joanna", age: "18"},
  {id: 3, name: "Caua", age: "15"}
]

class AlunosService {
    getAll(){
        return alunos;
    }
}

export const alunosService = new AlunosService();

//server fala get e routes pega as informacoes do service para o server, o service pega o que esta no banco de dados
