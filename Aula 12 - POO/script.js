//  Classe
// É um molde (modelo) para criar vários objetos com a mesma estrutura.
// 'A classe é a mãe do objeto'

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Criando objetos com a classe
const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Lucas", 30);

pessoa1.apresentar(); // Olá, meu nome é Ana e tenho 25 anos.
pessoa2.apresentar(); // Olá, meu nome é Ana e tenho 25 anos.
// 'O objeto é o filho da classe'

//Herança
// Permite que uma classe herde propriedades e métodos de outra.
// 'A herança são as carcateristicas que o filho da classe herda'

// class Animal {
//   falar() {
//     console.log("O animal fez um som.");
// }
// }

// class Cachorro extends Animal {
//   falar() {
//     console.log("O cachorro latiu.");
//   }
// }

// const dog = new Cachorro();
// dog.falar(); // O cachorro latiu.

// Métodos são as ações da classe, são como funções.
// ações no meu código. 
// -------------------------------------------------------------
// Objeto -  O FILHO DA CLASSE
// Um objeto é uma coleção de chave: valor, podendo conter dados e funções.


// const carro = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2020,
//   buzinar: function () {
//     console.log("Biiii!");
//   }
// };



