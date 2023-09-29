const pessoa = {
    nome: 'Elias',
    sobrenome: 'Moura',
    idade: 23,
    endereco: {
        rua: 'xpto',
        numero: 90
    }
};

// Atribuição via desestruturação
/*const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);*/

// podemos setar um valor padrão caso a chave não exista

/*

const { nome, pet="Não tem", idade } = pessoa;

console.log(nome, pet, idade);

*/

// 

// Podemos pegar a chave que tem no objeto
// e criar uma variável com outro nome para receber
// o valor.
// nesse exemplo ainda tem o valor padrão.
const { nome: minhaNovaVariável = '', sobrenome } = pessoa;

console.log( minhaNovaVariável, sobrenome)

// também podemos já fazer o destructuring do endereco

const { endereco: { rua, numero }} = pessoa;

console.log(rua, numero)

// Também podemos usar o resto na desestruração.
// o resto armazenará todas a chaves que não foram
// usados no objeto.

const { nome, ...resto } = pessoa;

console.log(nome, resto);