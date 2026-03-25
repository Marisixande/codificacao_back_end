const filmes = [
    { id: 1, name: "Minha Mãe É Uma Peça" },
    { id: 2, name: "Homem com H" },
    { id: 3, name: "Favela Amarela" },
    { id: 4, name: "Deus e o Diabo na Terra do Sol" }
]

class FilmesService {
    getAll() {
        return filmes;
    }

    getById(id) {
        return filmes.find((filme) => filme.id === id)
    }
}

export const filmesService = new FilmesService();