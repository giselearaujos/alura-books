let livros = [];

const endpointApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function getPegaLivrosApi() {
  const response = await fetch(endpointApi);
  livros = await response.json();
  let livrosDesconto = aplicarDesconto(livros);
  mostraLivros(livrosDesconto);
}

getPegaLivrosApi();
