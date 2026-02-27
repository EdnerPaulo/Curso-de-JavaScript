// nome  =  estrutura de dado


// for (i = 1; i<=3 ;i++){


//      console.log('contagem', i)
     
   


// }


// restaurante


// cadastra 
// quarto




let nomes = []
let mesas =  ['','1 - Mesa 4 ', '2 - Mesa 6', '3 - Mesa  8']
let valores =  []
let mesas_valores  =  [0,50.0,80.0,150.0]


for (x = 0; x < 3; x++){
     alert('CADASTRE - SE: ')
     let nome  =  prompt('Digite seu nome: ')
     let escolha  =  prompt('Escolha sua mesa: mesa 1 (50) |  mesa 2 (80) mesa 3 (150) ')
     let quantidade  =  Number(prompt('Quantidade de pessoas: '))
     nomes.push(nome)
     valores.push(mesas_valores[escolha])
     console.log(nomes)
     console.log(valores)
     
     if (escolha == 1){


       let  calculo = quantidade * mesas_valores[1]


       console.log('Mesa escolhida -  ' +  mesas[1]) 
       console.log('R$', calculo) 


     }else if(escolha == 2){


       let  calculo = quantidade * mesas_valores[2]
       console.log('Mesa escolhida -  ' +  mesas[2]) 
       console.log('R$', calculo) 




     }else if(escolha == 3){


       let  calculo = quantidade * mesas_valores[3]
       console.log('Mesa escolhida -  ' +  mesas[3]) 
       console.log('R$', calculo) 




     }else{


      console.log('Digite algo válido')


     }
  
    


}


// 1 


// for (i = 0;i<=10;i++){


//    console.log(i)


// }
// //



// for (i = 0;i<=21;i = i + 2){


//     console.log(i)
 
//  }



// tabuado



// n = 5



// for (i = 0; i <= 10 ; i ++){


//     c  =  n * i
//     console.log(n + ' x '  +  i + '  = ' +  c)
 


// }



// let array = [1,2,3,4]


// for (i = 0; i<array.length;i++){


//    console.log(array[i])


// }




// soma = 0


// for (i = 1;i<=100;i++){
//    soma += i
//    console.log(soma)


// }



// const months = ["Jan", "March", "April", "June"];
// // months.splice(1, 0, "Feb");
// let deletar =  2
// months.splice(3, 1)
// console.log(months)



// // // INTRODUÇÃO AO DESAFIO DA AULA 8



// // let itens  =  ['item 1', 'item 2']


// // let pergunta  =  prompt('deseja pedir? s/n')


// // let compras  =  []


// // while (pergunta == 's'){
    
    


// //     let quantos =  Number(prompt('Quantidade: '))
// //     for (n = 0;n<=quantos;n++){




// //     }


// //     pergunta  =  prompt('deseja pedir? s/n')
     


// // }




//7 



// c  = 11
// while(c>1){
//     c =  c - 1
//     console.log(c)
// }


// let aletorio  =  parseInt(Math.random() * 10)


// for (n = 1; n <= 3; n ++ ){



// let x  = 5


// if (aletorio == x){
//     console.log('Você ganhou o jogo')
//     console.log('numero aleatorio ', aletorio)
// }else{
//  console.log('Você perdeu o jogo')
//  console.log('numero aleatorio ', aletorio) 
// }



// }


// 8


// let  n = 1
// soma  =  0
// while (n != 0){
//     soma  =  soma +  n
//     n  =  Number(prompt('numeros: '))
//     console.log(soma)
// }


// console.log(soma) 


// // 9
// let  array  =  [1,2,3,4]
// i = 0
// while (i<array.length){
//    console.log(array[i])
//    i = i + 1
// }












