//  Classe Retângulo - atributos -  largura e altura


class retangulo {
    constructor(largura, altura) {
        this.largura = parseFloat(largura);
        this.altura = parseFloat(altura);
    }

    calcularArea() {
        return this.largura *this.altura;
    }
    
     calcule_retangular() {
            alert(`--- Dados do retangulo ---`);
            let largura = prompt('Largura do Retangulo');
            let altura = prompt('Altura do Retangulo');
            
            const meuRetangulo = new retangulo(largura,altura)
            alert(`A área do retângulo é: ${meuRetangulo.calcularArea()}`);
    }
}

const executor = new retangulo(0, 0);

executor.calcule_retangular();