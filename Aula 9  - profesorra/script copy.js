function soma(x, y){
    return x + y
     
  }
  



  function subtracao(x, y){
    return x - y
   
  }


  

function multiplicacao(x, y){
    return x * y
       
  }



  

function divisao(x, y){
    return x / y
   
  }




function calculadora(){

   while (true){

      x  =   Number(prompt('=') )

      op =  prompt('+ | -| / | * ')

      if (op == '+'){

        y  =   Number(prompt('=') )
        document.write(soma(x,y))
        break


      }else if(op == '-'){

        y  =   Number(prompt('=') )
        document.write(subtracao(x,y))
        break

      }else if(op == '*'){

        y  =   Number(prompt('=') )
        document.write(multiplicacao(x,y))
        break

      }else if(op == '/'){

        y  =   Number(prompt('=') )
        document.write(divisao(x,y))
        break

      }else{


        document.write('<H2>DIGITE ALGO VALIDO...</H2>')

      }




      }



}




calculadora()