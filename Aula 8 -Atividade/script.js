// // Exercícios com Loops for, while e Listas (Arrays) em JavaScript

// // Exercícios com Loop for

// // // 1 Contagem de 1 a 10

// for (n=1;n<=10;n++){

//     console.log(n)
    
//     }

// // 2 Números pares de 0 a 20


// for (n=0;n<=20; n += 2){

//     console.log(n);
    
//     }


// // 3 Tabuada do 5
// const mult = 5

// console.log("taboada do 5 ")
// for (n1=0;n1<=10;n1++){
//     console.log(n1 + " X " + mult +" = " + n1 * mult)
    
//     }

// // 4 Imprimir elementos de um array
// let a = [1,2,3,4,5];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

//  // 5 Soma de números de 1 a 100
// let soma = 0;

// for (let n = 0; n <= 100; n++) {

//   console.log(soma + " + " + n + " = " + (soma + n));
//     soma += n;


// }
// console.log("Soma total:", soma);


// Exercícios com Loop while


// 6 Contagem regressiva de 10 a 1


// let contador = 10;
// while (contador > 0) {
// console.log(`Contagem Regressiva: ${contador}`);
// contador--;
// }

// 7 Adivinhe o número (1 a 10)
// o math.floor serve ora deixar i numero inteiro
// math.random server pra criar um numero aleatorio aqui ele esta criando com a condiçao de 1 a 10
let adivinhe =(Math.floor(Math.random() * 10) + 1);
let tentativa;
let i = 0;

while (i < 5) {
  tentativa = Number(prompt("Adivinhe o número (1 a 10):"));

  if (tentativa === adivinhe) {
      alert("Você acertou!");
      break;
  } else if (tentativa > adivinhe) {
      alert("Muito alto!");
  } else {
      alert("Muito baixo!");
  }

  i++;
}

if (tentativa !== adivinhe) {
  alert("Você perdeu! O número era " + adivinhe);
}

// 8 Soma até digitar 0

// let soma = 0;
// let numero = Number(prompt("Digite um número (0 para parar):"));

// while (numero !== 0) {
//     soma += numero;
//     numero = Number(prompt("Digite outro número (0 para parar):"));
// }

// alert("Soma total:"+ soma);


// // 9 Percorrendo array com while

//     let x = [6,2,5,9,8,1,3,4,0,7];
//     let i = 0;
//     while (i < x.length ) {
//         console.log(x[i]);
//         i ++;
    
// }

// // 10 faça uma tabela fibonnaci

// let a = 0;
// let b = 1;
// let temp;

// while (a <= 100) {
//   console.log(a);
//   temp = a + b;
//   a = b;
//   b = temp;
// }
