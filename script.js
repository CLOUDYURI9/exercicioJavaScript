function calcularTempoDeVida(nome, dataNascimento) {

    const dataNascimentoObjeto = new Date(dataNascimento);
    const dataFalecimento = document.getElementById('dataFalecimento').value;
    const dataAtual = new Date();

    let vidaMs = 0;

    if (dataFalecimento && dataFalecimento != 0) {
        
        const dataFalecimentoObjeto = new Date(dataFalecimento);
        vidaMs = dataFalecimentoObjeto - dataNascimentoObjeto;
    } else {

        vidaMs = dataAtual - dataNascimentoObjeto;
    }

    const vidaDias = Math.floor(vidaMs / (1000 * 60 * 60 * 24));
    const vidaSemanas = Math.floor(vidaDias / 7);
    const vidaMeses = Math.floor(vidaDias / 30.44);
    const vidaAnos = Math.floor(vidaDias / 365.25);

    return `
        Olá, ${nome}!<br>
        Você tem:<br>
        ${vidaAnos} anos, <br>
        ${vidaMeses} meses, <br>
        ${vidaSemanas} semanas, <br>
        ${vidaDias} dias de vida.`;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    if (nome && dataNascimento) {
        const resultado = calcularTempoDeVida(nome, dataNascimento);

        document.getElementById('resultado').innerHTML = resultado;
    }
});
