function header() {
    let inicio, sobre, projetos, artigos, contato;
    let pagina = window.location.pathname;


    if (pagina.includes("/index.html")) {
        inicio = "#inicio";
        sobre = "#sobre";
        projetos = "#projetos";
        artigos = "#artigos";
        contato = "#contato";
    } else {
        inicio = "/index.html#inicio";
        sobre = "/index.html#sobre";
        projetos = "/index.html#projetos";
        artigos = "/index.html#artigos";
        contato = "/index.html#contato";
    }


    const headerpagina = document.getElementById("headerpagina");
    headerpagina.innerHTML = `<header class="card header">
        <nav class="nav-items">
            <a class="button to-left padding-large" href="${inicio}"><strong><img class="logoimg"
                    src="/src/imagens/Logo.png" alt="Logo"></strong></a>
            <a class="button to-right padding-large" href="${sobre}">SOBRE</a>
            <a class="button to-right padding-large" href="${projetos}">PROJETOS</a>
            <a class="button to-right padding-large" href="${artigos}">ARTIGOS</a>
            <a class="button to-right padding-large" href="${contato}">CONTATO</a>
        </nav>
    </header>`;
}


header();