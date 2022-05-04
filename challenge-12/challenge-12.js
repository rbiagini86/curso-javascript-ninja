(function() {

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    // 
    
    var person = {
        name: 'Rodrigo',
        lastname: 'Biagini',
        age: 36
    }

    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // 
    
    console.log(person);

    /*
    Crie um array vazio chamado `books`.
    */
    // 
    
    var book = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    //

    livro1 = {
        name: 'livro1',
        pages: 100
    }

    livro2 = {
        name: 'livro2',
        pages: 200
    }
    
    livro3 = {
        name: 'livro3',
        pages: 50
    }

    book.push(livro1)
    book.push(livro2)
    book.push(livro3)

    console.log( '\nLista de livros:' + book + '.' );

    /*
    Mostre no console todos os livros.
    */
    // 
    
    book

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    // 
    
    book.pop(livro3)

    console.log( '\nAgora sobraram somente os livros:' + book + '.');
    /*
    Mostre no console os livros restantes.
    */
    // 
    
    book

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // 
    
    book.join()
    console.log( '\nLivros em formato string:' + book + '.' );

    /*
    Mostre os livros nesse formato no console:
    */
    // 
    
    book 

    /*
    Converta os livros novamente para objeto.
    */
    // 
    
    ?
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    // 
    
    ?

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // 
    
    ?
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // 
    
    ?

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // 
    
    ?

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // 
    
    ?

})