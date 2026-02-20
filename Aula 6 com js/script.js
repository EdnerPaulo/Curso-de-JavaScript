function mudarTudo() {
    let texto = document.getElementById("texto").value;
    
    // Alerta
    alert("Você digitou: " + texto);

    // Console
    console.log("Texto digitado:", texto);


    // Alterando conteúdo da página
    document.getElementById("resultado").innerHTML = texto;
}
