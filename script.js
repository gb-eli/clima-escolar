function atualizarContagemRegressiva() {
    // Definir a data de encerramento: 03/02/2025 às 09:00 no horário de Brasília
    const encerramento = new Date('2025-02-03T09:00:00-03:00').getTime();

    function atualizar() {
        const agora = new Date().getTime();
        const diferenca = encerramento - agora;

        if (diferenca <= 0) {
            document.getElementById("contador").innerHTML = "A pesquisa foi encerrada.";
            return;
        }

        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `Tempo restante: ${horas}h ${minutos}m ${segundos}s`;
    }

    atualizar();
    setInterval(atualizar, 1000);
}

// Inicia a contagem ao carregar a página
window.onload = atualizarContagemRegressiva;
