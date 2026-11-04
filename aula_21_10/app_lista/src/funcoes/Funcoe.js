export function adicionarQuadrinho(textoAtual, listaAtual, setLista, setTextoAtual) {
  if (textoAtual.trim() === '') {
    return;
  }

  const novoQuadrinho = {
    id: String(new Date().getTime()),
    titulo: textoAtual,
  };

  setLista([...listaAtual, novoQuadrinho]);
  setTextoAtual('');
}