// //  Atividade 1: Função de Saudação Personalizada
// //  Crie uma função chamada saudacao que recebe um nome e um horário
// //  (manhã, tarde ou noite) e retorna uma saudação apropriada. Utilize parametros.
// function saudacao(){

//      let nome= prompt('Qual seu nome')
//     let horas = Number(prompt('Que horas são(só as horas sem minutos)'))
//     if (horas >= 6 && horas <= 12){
//         alert('Bom Dia ' + nome + ' agora sâo '+ horas)
//     }else if (horas > 12 && horas <= 18){
//         alert('Boa Tarde ' + nome+ ' agora sâo '+ horas)
//     }else if (horas > 18 && horas <= 24){
//         alert('Boa Noite ' + nome+ ' agora sâo '+ horas)
//     }else{
//         alert('Boa Madrugada ' + nome+ ' agora sâo '+ horas)
//     }
// }
// saudacao()


// //  Atividade 2: Calculadora Simples
// //  Crie uma função calculadora que recebe dois números e uma operação 
// // ('soma+, 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado.
// let num1 = Number(prompt('Digite um numero'))
// let num2 = Number(prompt('Digite outro numero'))
// alert ('Digite um destes operadores "/ para dividir" "* para Multiplicar" "- para subitrair" "+ para somar" ')
// let oper = prompt('Qual operacão voce quer fazer')

// function somar(){
//     return num1 + num2;
// }
// function subtrair(){
//     return num1 - num2;
// }
// function multiplicar(){
//     return num1 * num2;
// }
// function dividir(){
//     return num1 / num2;
// }

// if (oper == '+'){
//     alert( somar())
// } else if (oper == '-'){
//     alert( subtrair())
// } else if (oper == '*'){
//     alert( multiplicar())
// } else if (oper == '/'){
//     alert( dividir())
// } else {
//     alert('Voce nao escolheu nenhum operador' )
// }




// //  Atividade 3: Validador de Senha -  Utilize variáveis globais.
// //  Crie uma função validarSenha que verifica se uma senha tem pelo menos 8 
// // caracteres, contém pelo menos um número e uma letra maiúscula.
// let validarSenha = prompt('Crie uma senha com pelo menos 8 caracteres, contém pelo menos um número e uma letra maiúscula.')

// let tentativa = 0;

// function senha(novaSenha){
//     if (novaSenha == validarSenha){
//         alert('Senha Valida')
//         return true
//     }else{
//         alert('Senha Invalida')
//         return false
        
//     }
// }
//     while(tentativa < 3){
//         let senhaUsuario = prompt("Digite sua senha, para acessar o sistema:")
//        if( senha(senhaUsuario)){
//         break
//        } 
//         tentativa++
// }

// if(tentativa === 3){
//     alert('Você excedeu o número de tentativas!')
// }


// //  Atividade 4: Gerador de Tabuada utilize variáveis locais. 
// //  Crie uma função gerarTabuada que recebe um número e retorna sua tabuada de 1 a 10.
let numerador = Number(prompt('Digite um numero pra ver sua taboada'))
for(i=1;i<10;i++){
    let resultado= numerador * i
}
alert(numerador + ' X '+ i +' = '+ resultado)





// // Atividade 5: CRie uma calculadora de IMC, utilize parâmetros
// 1 -  O usuario precisa digitar o peso e a idade
// 2 -  O sistema precisa fazer o calculo
// 3 -  Precisa mostrar ao usuário a saída de acordo com o calculo
// Obesidade 1, peso normal, desnutrição, obesidade 2, obedidade 3. 
// function imc(){
//     peso = Number(prompt('Peso'))
//     altura = Number(prompt('Altura'))
//     imc = peso/ (altura*altura)
//     return imc
// }

// alert(imc())

// // ```