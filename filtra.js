var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var atletas = document.querySelectorAll(".atleta");

    if (this.value.length > 0) {
        for (var i = 0; i < atletas.length; i++) {
            var atleta = atletas[i];
            var tdNome = atletas.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                atleta.classList.add("invisivel");
            } else {
                atleta.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < atletas.length; i++) {
            var atleta = atletas[i];
           atleta.classList.remove("invisivel");
        }
    }
});
