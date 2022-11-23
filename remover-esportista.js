var atleta = document.querySelectorAll(".atleta");

var tabela = document.querySelector("#tabela-atletas");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
