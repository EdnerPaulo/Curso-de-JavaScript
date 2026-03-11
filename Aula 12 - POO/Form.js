
// Polimorfismo
// É a capacidade de usar o mesmo método com comportamentos diferentes.
// No exemplo acima, o método `falar()` existe em `Animal` e em `Cachorro`, 
// mas cada um se comporta de forma diferente.
// Por que usar POO em JavaScript?

// * Organiza o código em blocos reutilizáveis
// * Facilita o reaproveitamento de lógica
// * Melhora a manutenção e leitura
// * Permite trabalhar com estruturas mais próximas da realidade
// -----------------------------------------------
// Os Quatro Pilares
// A POO se estrutura em quatro conceitos fundamentais:
// Encapsulamento: Proteção dos dados internos do objeto
// Herança: Reutilização e extensão de comportamentos
// Polimorfismo: Capacidade de objetos responderem de formas diferentes à mesma mensagem
// Abstração: Foco nas características essenciais, ignorando detalhes irrelevantes
// +++=+++++++
// 

export class Form{
   constructor(nome, idade, endereco, email){
   this.nome = nome;
   this.idade = idade;
   this.endereco = endereco;
   this.email = email
   }

   display(){
   console.log('Nome: ', this.nome)
   console.log('idade: ', this.idade)
   console.log('Endereço: ', this.endereco)
   console.log('E-mail: ', this.email)
   }

   done(){
     
    if (this.nome && this.idade && this.endereco && this.email){
       alert('Cadastro Realizado')
    } 
   
   }

}




