// DESAFIO JAVA SCRIPT
// CRIE UM SISTEMA DE CALCULO TRABALHISTA
// 1 -  descubra o valor hora do trabalhador
// 2 -  aplique uma função hora extra 50%
// 3 -  aplique uma função o calculo da quantidade de horas extra que foi realizada x extra
// 4 -  aplique uma outra função que some o salário mais as extras
// 5 -  mostre o total a receber  


class FolhaPag {
    constructor(salMen, horasTrab) {
        this.salMen = salMen;
        this.horasTrab = horasTrab;
    }

    // 1 - Descobre o valor da hora do trabalhador
    calcularValorHora() {
        return this.salMen / this.horasTrab;
    }

    // 2 - Aplica a taxa de 50% sobre o valor da hora
    calcularValorHoraExtra() {
        const valorComum = this.calcularValorHora();
        return valorComum * 1.5; // Valor da hora + 50%
    }

    // 3 - Calcula o total ganho apenas com horas extras
    calcularTotalExtras(quantidadeHoras) {
        const valorDaExtra = this.calcularValorHoraExtra();
        return valorDaExtra * quantidadeHoras;
    }

    // 4 & 5 - Soma o salário base com as extras e retorna o total
    gerarHolerite(quantidadeHorasExtras) {
        const totalExtras = this.calcularTotalExtras(quantidadeHorasExtras);
        const totalReceber = this.salMen + totalExtras;

        console.log(`--- Resumo do Cálculo ---`);
        console.log(`Salário Base: R$ ${this.salMen.toFixed(2)}`);
        console.log(`Valor da Hora Comum: R$ ${this.calcularValorHora().toFixed(2)}`);
        console.log(`Valor da Hora Extra (50%): R$ ${this.calcularValorHoraExtra().toFixed(2)}`);
        console.log(`Total de Horas Extras: ${quantidadeHorasExtras}h (R$ ${totalExtras.toFixed(2)})`);
        console.log(`--------------------------`);
        console.log(`TOTAL A RECEBER: R$ ${totalReceber.toFixed(2)}`);
        
        return totalReceber;
    }
}

// --- TESTANDO O SISTEMA ---
const meuCalculo = new FolhaPag(3000, 220); // Salário R$3000, 220h mensais
meuCalculo.gerarHolerite(10); // Calculando com 10 horas extras