function somar(a,b){
    return a + b
};

const somarAnonima = function(num,num2){
    return num + num2
};

const somarArrow = (numero, numero2) => numero + numero2;

console.log(somar(10,5));
console.log(somarAnonima(10,5));
console.log(somarArrow(10,5));