// // script.js

// let nome= prompt('Digite o seu Nome');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let dado = document.getElementById('texto').value;

    if (dado === 'Julia') {
        alert('Seja bem Vinda ' + dado + ' acesso liberado');

    } else if (dado === 'Paulo'){
        alert('Seja bem Vindo ' + dado + ' O REI DO PEDAÇO tem ' + idade + ' anos');

    } else {
        alert('Seja bem Vindo(a) ' + dado);
    }
});

let ano_nascimento = Number(prompt('Digite o ano de seu nascimento'));
let idade = 2026 - ano_nascimento;

if (ano_nascimento >= 2026) {
    alert('Acabou de nascer');
} else {
    alert('Você tem ' + idade + ' anos');
}

