const valores = [5,10,3,7,20,65,70];

//filter, esse metodo filtro para pelar elementos de uma determinada condição.

const impares = valores.filter( num => num % 2 !==0 );
const maiores = valores.filter( num => num > 5 );


// (reduce) reduz um  conjunto de valores em um unico valor.

const soma = numeros.reduce((acumulador, num) => acumulador += num);

console.log(soma)
// function primo(num){
//     return num % 2 !==0
// };



// metodo map, ele vai percorrer todos os elementos e retornando um novo array simplificado 
const dobro = numeros.map(num => num * 2);
conaole.log(dobro)

console.log(impares);
console.log(maiores);