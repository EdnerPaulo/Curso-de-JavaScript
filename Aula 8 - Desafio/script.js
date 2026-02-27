// INTRODUÇÃO AO DESAFIO
// ## ***Desafio que mistura for, while e listas***

// **Desafio: Criar um programa de array de compras interativo que:**


let itens = ['0','1-Pizza Calabresa',' 2-Muçarela',' 3-Portuguesa']
// **1 Use um array para armazenar os itens
alert('Seja Bem Vindo a Pizzaria Dona Bella')

let pergunta  =  prompt('Gostaria de ver os sabores das Pizza. s/n')

// 3 Use for para mostrar a lista de compras
let compras  =  []
let valores  =  ['',40.0,50.0,55.0]
let total = 0
let escolha 
let escolheu
while (pergunta == 's'){
    // 2 Use while para manter o programa rodando até o usuário decidir sair
    
    
    alert(itens.join('\n'))
    let quantidade = Number(prompt('Quantas pizzas deseja?'))

    for (let n = 0; n < quantidade; n++){
        escolha  =  prompt('Qual o sabor digite o numero correspondente')
        compras.push(itens[escolha]) 
        total += valores[escolha]
        
    }
            
        pergunta  =  prompt('Deseja incluir um novo pedido? s/n')
        // // 4 Tenha opções para adicionar, remover e listar itens**
        alert('Voce escolheu produto: '+ compras )
        
            pergunta2  =  prompt('Gostaria de remover algum sabor de Pizza. s/n')           
            while (pergunta2 == 's'){
                    alert('Qual sabor de pizza quer retirar')
                    alert(compras)
                    let escolheu = prompt('Qual o sabor digite o numero correspondente')
                    let itemRemovido = compras[escolheu]
                    let indice = itens.indexOf(itemRemovido)
                    total -= valores[indice]
                    compras.splice(escolheu,1) 
                    pergunta2  =  prompt('Gostaria de remover algum outro sabor de Pizza. s/n')
                }
        
            alert('Voce escolheu produto: '+ compras +' e o valor total da sua compra é '+ total)
        
    }

alert('Obrigado pela preferencia e volte sempre.')