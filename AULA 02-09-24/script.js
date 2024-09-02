//Arredondamento
Math.round()//ARREDONDAMENTO COMUM

Math.ceil()//ARREDONDA PARA CIMA

Math.floor()//ARREDONDA PARA BAIXO

//OPERAÇÕES MATEMÁTICAS 
Math.pow(numero, potência)
Math.sqrt(numero)//Raiz quadrada
Math.abs(numero)//Mostra o numero natual e positivo

//PEGAR O MÍNIMO ENTRE ELES OU O MÁXIMO ENTRE ELES

Math.min()
Math.max()




//EXERCÍCIO FAZER UMA FUNÇÃO QUE EXIBA 3 FORMAS DE ARREDONTADEMTO DIFERENTES COM DOIS NÚMEROS
let num1 = (prompt('Digite seu primeiro número para o arredondamento!'));
let num2 = (prompt('Digite seu segundo número para o arredondamento!'));

resultado = Math.round((num1 + num1) / 2);

console.log(`Seu primeiro número arredondado é ${Math.pow(resultado)} para um resultado normal!`);
console.log(`Seu número arredondado para cima é ${Math.ceil(resultado)} para o maior arredondamento!`);
console.log(`Seu primeiro número arredondado é ${Math.floor(resultado)} para o menor arredondamento!`);


let numParaElevar = (prompt('Digite seu primeiro número para Elevar!'));
let numElevado = (prompt('Digite o expoente para ser elevado!'));


let resultadoElevação = Math.pow(numParaElevar, numElevado);