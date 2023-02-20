const section = document.getElementById("livros");
const elementoPromocao = document.getElementById(
  "valor_total_livros_disponiveis"
);

function mostraLivros(ListaLivros) {
  section.innerHTML = "";
  elementoPromocao.innerHTML = "";
  ListaLivros.forEach((livro) => {
    let disponibilidade =
      livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    section.innerHTML += `
  <div class="livro">
  <img class="${disponibilidade}" src=${livro.imagem} alt=${livro.alt} />
  <h2 class="livro__titulo">
  ${livro.titulo}
  </h2>
  <p class="livro__descricao">${livro.autor}</p>
  <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>    
</div>
  `;
  });
}
