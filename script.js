function atualizarContagemRegressiva() {
    // Definir a data de encerramento: 03/02/2025 às 09:00 no horário de Brasília
    const encerramento = new Date('2025-02-03T09:00:00-03:00').getTime();
    const contador = document.getElementById("contador");
    const botao = document.querySelector("a"); // Seleciona o link do botão

    function atualizar() {
        const agora = new Date().getTime();
        const diferenca = encerramento - agora;

        if (diferenca <= 0) {
            contador.innerHTML = "A pesquisa foi encerrada.";
            contador.style.backgroundColor = "red";
            contador.style.color = "white";

            // Alterar o link do botão para o novo endereço
            botao.setAttribute("href", "https://gb-eli.github.io/clima-escolar/encerrado.html");
            return;
        }

        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        contador.innerHTML = `Tempo restante: ${horas}h ${minutos}m ${segundos}s`;

        // Adiciona a classe de piscar se faltar menos de 10 minutos
        if (horas === 0 && minutos < 10) {
            contador.classList.add("piscar");
        } else {
            contador.classList.remove("piscar");
        }
    }

    atualizar();
    setInterval(atualizar, 1000);
}

// Inicia a contagem ao carregar a página
window.onload = atualizarContagemRegressiva;
