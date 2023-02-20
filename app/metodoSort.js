const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPreco);

function ordenarLivrosPreco() {
  let ordenacaoPrecos = livros.sort((a, b) => a.preco - b.preco);
  mostraLivros(ordenacaoPrecos);
}
