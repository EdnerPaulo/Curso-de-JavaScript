// 3: Classe Conta Bancária -  atributos saldo, v , métodos - saque, deposito

class conta_bancaria {
    constructor(saldo, saque, deposito) {
        this.saldo = parseFloat(saldo) || 0;
        this.saque = parseFloat(saque) || 0;
        this.deposito = parseFloat(deposito) || 0;
    }

    saque_dinheiro() {
        if(this.saque > this.saldo) {
        alert("Erro: Saldo insuficiente!");
        } else {
            return this.saldo - this.saque;
        }
    }
    
    deposito_dinheiro() {
        return this.saldo + this.deposito;
    }
 
     oper_bancaria(escolha) {
            alert('--- Processando Operação ---');  
            
            if(escolha === 'saque'){
                this.saldo = this.saque_dinheiro();
                alert(`Saque realizado com sucesso! Novo saldo parcial: ${this.saldo}`);

            }else if(escolha === 'deposito'){            
                this.saldo = this.deposito_dinheiro();
               alert(`Depósito realizado com sucesso! Novo saldo parcial: ${this.saldo}`);
            }else{
                alert('Nao escolheu uma opção valida');

            }
           
        }
}
while (continuar) {
    let saque = 0;
    let deposito = 0;

    let escolha = prompt(`Saldo atual: R$ ${saldoAtual}\nDigite: Saque, Deposito ou Sair`);

    // 1. Verificamos se o usuário quer sair ou cancelou
    if (!escolha || escolha.toLowerCase() === 'sair') {
        continuar = false;
        break; 
    }

    let escolhaFormatada = escolha.toLowerCase();

    // 2. Coletamos os valores conforme a escolha
    if (escolhaFormatada === 'saque') {
        saque = prompt('Quanto quer sacar?');
    } else if (escolhaFormatada === 'deposito') {
        deposito = prompt('Quanto quer depositar?');
    } else {
        alert('Opção inválida!');
        continue; // Volta para o início do while
    }

    // 3. AGORA SIM: Criamos o executor e operamos DENTRO do while
    const executor = new conta_bancaria(saldoAtual, saque, deposito);
    saldoAtual = executor.oper_bancaria(escolhaFormatada);
}


const executor = new conta_bancaria(saldo, saque, deposito);


executor.oper_bancaria(escolha.toLowerCase());

Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});