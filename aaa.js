function book(nomeLivro){
    const livros = {
        'livro1': {
            nomeLivro: 'A volta dos que não foram',
            quantidadePaginas: 100,
            autor: 'Pedro',
            editora: 'Livro'
        },

        'livro2': {
            nomeLivro: '',
            quantidadePaginas: 200,
            autor: 'Ana',
            editora: 'Books'
        },

        'livro3': {
            nomeLivro: '',
            quantidadePaginas: 300,
            autor: 'Lucas',
            editora: 'Livro1'
        }
    }
    return !nomeLivro ? livros : livros[nomeLivro];
}




