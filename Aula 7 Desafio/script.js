alert('Reserva de mesa')
let num_pessoa = Number(prompt('Quantas pessoas na sua reserva'));
if( num_pessoa >= 3){
    let nome =  prompt('Digite o nome do 1º cliente');
    let nome1 =  prompt('Digite o nome do 2º cliente');
    let nome2 =  prompt('Digite o nome do 3º cliente');
    alert('Os clientes ' + nome + ' , '+ nome1 + ' e '+ nome2 + ' foram cadastrados com sucesso ')
}else if(num_pessoa == 2){
    let nome =  prompt('Digite o nome do 1º cliente');
    let nome1 =  prompt('Digite o nome do 2º cliente');
    alert('Os clientes ' + nome + ' e '+ nome1 + ' foram cadastrados com sucesso ')
}else{
    let nome =  prompt('Digite o nome do 1º cliente');
    alert('O cliente ' + nome + ' foi cadastrado com sucesso ')
    alert ('Qual o seu tipo de mesa para sua reserva')
}
let mesa =  prompt('Escolha entre padrao, vip ou varanda');
 
if( mesa == 'padrao'){
    alert('Você escolheu a Mesa Padrão (até 4 pessoas)  	R$ 50 por pessoa');
}else if( mesa == 'vip'){
    alert('Você escolheu a 	Mesa  VIP (até 6 pessoas)	R$ 80 por pessoa');
}else if( mesa == 'varanda'){
    alert('Você escolheu a Mesa Varanda	(até 8 pessoas)	R$ 100 por pessoa');
}else{
    alert('Você não escolheu nenhuma de nossas mesas')
}


const padrao = 50 ;
const vip = 80 ;
const varanda =  100;
let consumo_minimo = 0; 
if(mesa == 'padrao'){
    let valor_total = padrao * num_pessoa;
    alert('O valor total da sua mesa é R$ '+ Number(valor_total));
}else if(mesa == 'vip'){
    let valor_total = vip * num_pessoa;
    alert('O valor total da sua mesa é R$ '+ Number(valor_total));
}else if(mesa == 'varanda'){
    let valor_total = varanda * num_pessoa;
    alert('O valor total da sua mesa é R$ '+ Number(valor_total));
}else{
    let valor_total = consumo_minimo * num_pessoa;
    alert('O valor total da sua mesa é R$ '+ Number(valor_total));
} 

