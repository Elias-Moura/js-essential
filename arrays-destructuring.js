/* 
    A desestruturação serve para atribuir valores em variáveis
Ou constantes de forma mais fácil. Funciona basicamente como o
unpack do Python. Vamos a alguns exemplos abaixo.
   
 */

// quero trocar os valores entre as variáveis:

let a = 'A'; // b = a   Nesse caso precisariamos 
let b = 'B'; // a = c   De uma quarta variável
let c = 'C'; // c = a   para realizar essa troca

// Com o destructuring conseguimos realizar assim:

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); // B C A

// Também funciona muito bem para listas.
//                   0          1          2
//                0  1  2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);

// É possível pular item como uma , vazia
// const [lista1, , lista3] = numeros;

// Também podemos utilizar a notação de resto `...`
// para armazenar o restante de uma operação

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primeiro, segundo, ...resto] = numeros2;

console.log(primeiro, segundo);
console.log(resto);