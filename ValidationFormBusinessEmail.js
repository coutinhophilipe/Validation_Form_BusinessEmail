function Validacao(email) {

    // Regex para verificar se o e-mail tem um "@" e pelo menos um "." após o "@"
    let FormatoValido = /@.*\./;

    // Regex para verificar se o e-mail tem um ","
    let FormatoInvalido = /,/;
    
    // Regex para excluir alguns domínios de e-mail comuns
    let DominiosProibidos = /@(gmail\.com|yahoo\.com|outlook\.com|aol\.com|hotmail\.com)$/i;

    // Se o Regex for verdadeiro no teste na variável email E se o teste na varável email não tiver (!) os valores da variável dominios proibidos
    let Valido = FormatoValido.test(email) && !DominiosProibidos.test(email) && !FormatoInvalido.test(email);

    if (Valido) {

        console.log(`${email} é um email válido.`);

    } else {

        console.log(`${email} é um email inválido.`);

    }

}

// Teste
Validacao (`teste@teste.com,br`);
Validacao (`teste@gmail.com`);
Validacao (`teste@hotmail.com`);
Validacao (`teste@teste.com.br`);
