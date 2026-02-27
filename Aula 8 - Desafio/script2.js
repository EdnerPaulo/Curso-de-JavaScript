// INTRODUÇÃO AO DESAFIO
// ## ***Desafio que mistura for, while e listas***

// **Desafio: Programa de array de compras interativo**

let itens = ['0','1-Pizza Calabresa',' 2-Muçarela',' 3-Portuguesa']
let valores = ['',40.0,50.0,55.0]

alert('Seja Bem Vindo a Pizzaria Dona Bella')

let compras = []
let total = 0
let pergunta = prompt('Gostaria de ver os sabores das Pizza. s/n')

while (pergunta == 's'){

    // Mostra o cardápio
    alert(itens.join('\n'))
    
    let quantidade = Number(prompt('Quantas pizzas deseja?'))

    // Adiciona as pizzas ao carrinho
    for (let n = 0; n < quantidade; n++){
        let escolha = Number(prompt('Qual o sabor digite o numero correspondente'))
        compras.push(itens[escolha])
        total += valores[escolha]
    }
    
    // Pergunta se quer incluir mais
    pergunta = prompt('Deseja incluir um novo pedido? s/n')
    
    // Mostra o carrinho atual
    alert('Você escolheu os produtos: ' + compras)
    
    // Pergunta se quer remover algum item
    let pergunta2 = prompt('Gostaria de remover algum sabor de Pizza. s/n')
    while (pergunta2 == 's'){
        alert('Carrinho atual: ' + compras)
        
        let escolheu = Number(prompt('Qual o sabor digite o número correspondente no carrinho'))
        
        // Pega o item antes de remover
        let itemRemovido = compras[escolheu]
        
        // Descobre o índice no cardápio
        let indice = itens.indexOf(itemRemovido)
        
        // Ajusta o total
        total -= valores[indice]
        
        // Remove do carrinho
        compras.splice(escolheu,1)
        
        pergunta2 = prompt('Gostaria de remover outro sabor de Pizza. s/n')
    }
    
    alert('Carrinho final até agora: ' + compras + '\nValor total: R$ ' + total)
}

alert('Obrigado pela preferência! Volte sempre.')