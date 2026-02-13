
function Soma(){
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML= parseFloat(valor1) + parseFloat(valor2);
}
function Subtracao(){
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML= parseFloat(valor1) - parseFloat(valor2);
}
function Multiplicacao(){
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML= parseFloat(valor1) * parseFloat(valor2);
}
function Divisao(){
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML= parseFloat(valor1) / parseFloat(valor2);
}

