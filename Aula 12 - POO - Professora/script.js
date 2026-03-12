// Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao


class Pessoa {
      // auxilia ma criação dos atrinutos da classe
    constructor(nome, idade, endereco, formacao){


    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.formacao = formacao;
    }



}




let pessoa = new Pessoa('junior', 25, 'rua 100', 'ads')
console.log(pessoa)