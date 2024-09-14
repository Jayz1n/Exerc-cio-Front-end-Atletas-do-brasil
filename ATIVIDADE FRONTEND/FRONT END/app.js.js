
dados.forEach(function (atleta) {
    console.log("Título: " + atleta.tecnico);
    console.log("Descrição: " + atleta.descrição);
    console.log("Link:" + atleta.link)
    console.log("------------------------");
});

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campopesquisa = document.getElementById("campo-pesquisa").value;

    if (!campopesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return

    }
    campopesquisa = campopesquisa.toLowerCase();

    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campopesquisa) || descricao.includes(campopesquisa) || tags.includes(campopesquisa)){
            resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank"> Mais informações </a>
        </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p> nada foi encontrado </p>"

    }
    section.innerHTML = resultados;
}
