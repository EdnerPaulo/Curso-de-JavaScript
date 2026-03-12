// DESAFIO JAVA SCRIPT
// CRIE UM SISTEMA DE CALCULO TRABALHISTA
// 1 -  descubra o valor hora do trabalhador
// 2 -  aplique uma função hora extra 50%
// 3 -  aplique uma função o calculo da quantidade de horas extra que foi realizada x extra
// 4 -  aplique uma outra função que some o salário mais as extras
// 5 -  mostre o total a receber  

class Calculo{


       constructor(salario, quantidade_extra){
        this.carga = 220
        this.salario = salario;
        this.extra_50 = 1.5
        this.quantidade_extra = quantidade_extra
        
       }


      sal_hora(){


      return this.salario / this.carga
      
      }
     
      valor_extra(h_sal){


        return h_sal * this.extra_50
        
        }







}


let calculo_sal_hora = new Calculo(10000,10)
let hr_sal =  calculo_sal_hora.sal_hora()
console.log('valor hora', hr_sal)




let valor_ex = calculo_sal_hora.valor_extra(hr_sal)
console.log('valor extra', valor_ex)




