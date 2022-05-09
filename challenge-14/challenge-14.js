(function() {

    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    console.log( 'Number Objects Array:' );
    var numberObjects = [];
    for(var i = 1; i <= 10; i++) {
        numberObjects.push({number: i});
    }
    console.log(numberObjects);

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
    console.log( '\nJust Numbers:' );
    // 
    
    var justNumbers = numberObjects.map(function(item) {
        return item.number;
    });
    console.log(justNumbers);

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
    console.log( '\nJust module of division by 2 or 3:' );
    var justMod2Or3 = justNumbers.filter(function(item) {
        if(item % 2 === 0 || item % 3 === 0);
            return item;
    });
    console.log(justMod2Or3);

    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    console.log( '\nOperation:' );
    var operation = justMod2Or3.reduce(function(acumulado, atual, index) {
        return (acumulado + 1) * atual;
    }); 0;

    console.log(operation);

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    console.log( '\nOperation 2:' );
    var operation2 = justMod2Or3.reduceRight(function(acumulado, atual) {
        return (acumulado + 1) * atual;
    }) 0;
    console.log(operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    console.log( '\nSeu nome na língua do "P":' );
    var name = ['Ro', 'dri', 'go'];
    var reduceP = name.reduce(function(acumulado, atual) {
        return acumulado + 'P' + atual;
    }, '');
    console.log(reduceP);

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log( '\nInversed Name:' );
    // 
    
    ?

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    // 
    
    ?

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log( '\nExiste um { number: 2 } em numberObjects?' );
    // 
    
    ?

    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    // 
    
    ?

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
    // 
    
    ?

});

//////////////////////////////////////////////////////////////////////////////////////

'FUNCTIONS' reduce(); + reduceRight();

var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);
console.log(reduce);

/*

O "reduce" retorna um valor que nada mais é do que a "soma" entre todos os valores
de um objeto, na forma de acumulado, por isso o "0)" ali para iniciar da acumulação 0. 

Quando você faz isso sobre strings, ele concatena as informações. No caso acima foi com 
números inteiros, então ele realmente soma os dados. 

1ª - 0 + 1 = 1 
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15

*/

var arr = ["R", "o", "d", "r", "i", "g", "o"];
var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
});
console.log(reduce);

/*

Aqui temos o reduce() e o reduceRight() para fazer a mesma coisa, apenas mudando a ordem
de esquerda para a direita ou de direita para a esquerda. 

Se a gente usa isso na strig do nome acima vamos ter o nome invertido, enquanto que se fizer
para a soma de números vai mudar a ordem, porém, não o resultado. 

*/

var arr = ["R", "o", "d", "r", "i", "g", "o"];
var reduce = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
});
console.log(reduce);

//////////////////////////////////////////////////////////////////////////////////////

'Function' indexOf() e lastIndexOf();

var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(6));
console.log(arr.indexOf(3));

/*

Nesse caso o indexOf() gera uma busca, dentro do array apontado, informando qual a 
posição que você acha aquele index passado dentro do parêntese. 
Caso não encontre o índice vai dar um resultado de -1 

Ao passarmos um segundo parámetro, vamos dizer onde você quer que ele ache aquele índice
buscado na pesquisa. 

O lastIndexOf() faz a mesma coisa do returnRight() fazendo a busca do final do array para 
o início dele, ao contrário do indexOf() puro. 

*/

var arr = ["R", "o", "d", "r", "i", "g", "o"];

var index = arr.lastIndexOf('i', 2)

console.log(arr.lastIndexOf('k'));


//////////////////////////////////////////////////////////////////////////////////////