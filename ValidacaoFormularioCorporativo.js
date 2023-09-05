// Variável botao encapsula o botao do formulário
let botao = document.getElementById(`botao`);

// Adiciona uma ação ao botao de chamar a função "validação"
botao.addEventListener(`click`, validacao);

// Variável resultado encapsula a tag <p> que está com o id resultado
let resultado = document.getElementById(`resultado`);

// Varável txtemail encapsula o valor do campo com o id "txtemail"
let txtemail = document.getElementById(`txtemail`);

function validacao() {

    // Variável dentro da função para que o valor seja atualizado toda chamada nova da função 
    let email = txtemail.value;

    // Regex para verificar se o e-mail tem um "@" e pelo menos um "." após o "@"
    let formatoValido = /@.*\./;
    
    // Regex para excluir alguns domínios de e-mail comuns
    let dominiosProibidos = /@(gmail\.com|yahoo\.com|outlook\.com|aol\.com|hotmail\.com)$/i;


    // Se o Regex for verdadeiro no teste na variável email E se o teste na varável email não tiver (!) os valores da varável dominios proibidos
    if (formatoValido.test(email) && !dominiosProibidos.test(email)) {

        resultado.innerText = `Email válido`;

    } else {

        resultado.innerText = `Email inválido`;
    }

}
