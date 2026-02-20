// // // script.js
// // 1 - Verificador de Números
// // Peça um número ao usuário e verifique se é positivo, negativo ou zero.
let numer = prompt('Digite um numero')> 0 ? alert('positivo'): alert('negativo');




// let numero = Number(prompt('Digite um numero'));

// if (numero == 0 ){
//     alert('O numero é 0')
// } else if(numero < 0 ){
//     alert('O numero negativo')
// } else if(numero > 0){
//     alert('É um numero é positivo')
// }

// // 2 - Verificador de Votação
// // Peça a idade do usuário e verifique se pode votar .
// let idade = Number(prompt('Digite sua idade'));

// if ( idade >=16 ){
//     alert('Já pode Votar')
// } else{
//     alert('Não pode votar ainda')
// }

// // 3 - Par ou Ímpar
// // Declare um número qualquer e determine se é par ou ímpar.
// let numero1 = Number(prompt('Digite um numero'));

// if (numero1 % 2 == 0 ){
//     alert('É um numero par')
// } else {
//     alert('O numero é impar')
// }

// 4 - Classificador de Triângulos
// Peça 3 números ao usuário e classifique o triângulo como:

// Equilátero (todos lados iguais)

// Isósceles (dois lados iguais)

// Escaleno (todos lados diferentes)

// let num1 = Number(prompt('Digite um numero'));
// let num2 = Number(prompt('Digite um numero'));
// let num3 = Number(prompt('Digite um numero'));

// if(num1 == num2 && num1 == num3 && num2 == num3 ){
//     alert ('Equilátero (todos lados iguais)');
// } else if(num1 != num2 && num1 == num3 || num2 == num3 && num1 != num3){
//     alert('Isósceles (dois lados iguais)')
// }else{
//     alert('Escaleno (todos lados diferentes)')
// }
       
// 5 - Múltiplo de  8 e 16
// Verifique se um número é múltiplo de 8 e 16 simultaneamente.
         
// let n1 = Number(prompt('Digite um numero'));

// if(n1 % 8 == 0 && n1 % 16 == 0  ){
//     alert('O numero '+ n1 + ' e divisivel por 8 e 16');
// // }else if(n1 % 8 == 0 || n1 % 16 != 0  ){
// //     alert('O numero '+ n1 + ' e divisivel por 8 e não por 16');
// }else {
//     alert('O numero '+ n1 + ' não e divisivel por 8 e 16');
// }

// 6 - Número Positivo e Maior que 15
// Verifique se um número atende às duas condições:

// positivo e maior que 15

// let n = Number(prompt('Digite um numero'));

// if (n > 0  && n >15){
//     alert('O Numero ' + n + ' e positivo e maior que 15')
// }else if(n > 0  && n <15){
//     alert('O Numero  ' + n + ' pode ser positivo mais não maior que 15')
// }else{
//     alert('O Numero' + n + ' não é positivo e não maior que 15')
// }

// 7 - Divisível por 9 ou 6
// Verifique se um número é divisível por 9 ou .6

// let nunber = Number(prompt('Digite um numero'));

// if(nunber % 6 ==0 && nunber % 9 == 0){
//     alert('O Numero '+ nunber + ' é divisivel por 6 e 9 ao mesmo tempo')
// } else{
//     alert(' o Numero ' + nunber + ' nao  é divisivel por 6 e 9 ao mesmo tempo')
// }