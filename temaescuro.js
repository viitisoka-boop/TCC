function aplicarTemaSalvo() {
    const tema = localStorage.getItem("temaTCC");

    document.body.classList.toggle("dark-mode", tema === "escuro");
}

function alternarModoEscuro() {
    const estaEscuro = !document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "temaTCC",
        estaEscuro ? "escuro" : "claro"
    );

    aplicarTemaSalvo();
}

aplicarTemaSalvo();