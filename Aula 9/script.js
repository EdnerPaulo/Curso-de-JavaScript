
function nomeSobrenome() {

    nome ='Julia'
    Sobrenome='Almeida'
    console.log(nome,Sobrenome);
}

nomeSobrenome()

nome ='Kaique'

function teste() {

    console.log('Olá', nome);

}
teste()

function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3)); // 5
// ---------------------------------------------------------------------

// Expressão de Função (Atribuída a uma Variável)

const multiplicar = function(a, b) {
  return a * b;
};
console.log(multiplicar(2, 4)); // 8Arrow Function (`=>`) (ES6+)

const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // 5

// ---------------------------------------------------------------
const saudacao = (nome) => {
  const mensagem = `Olá, ${nome}!`;
  return mensagem;
};
console.log(saudacao("Maria")); // "Olá, Maria!"

// Parâmetros Padrão

function calcularImc(peso, altura = 1.75) {
  return peso / (altura * altura);
}
console.log(calcularImc(70)); // Usa altura padrão (1.75)

