document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Queridos professores, hoje é o dia de celebrar vocês! " +
        "Nós alunos, agradecemos todos os esforços de vocês para nos ensinar as matérias e lições da vida."+
        "Que Deus os abençoe e dê forças para lutarem, tentar e fazer a diferença no mundo.";
    });
});

