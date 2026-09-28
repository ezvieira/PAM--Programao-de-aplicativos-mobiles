import { Alert } from 'react-native';

// Adiciona um filme novo na lista (com validação dos inputs)
export function adicionarFilme(
  titulo,
  nota,
  lista,
  setLista,
  setTitulo,
  setNota
) {
  const n = Number(nota);

  if (titulo.trim() === '') {
    Alert.alert('Erro', 'Digite o título do filme!');
    return;
  }

  if (nota === '' || isNaN(n) || n < 0 || n > 10) {
    Alert.alert('Erro', 'Digite uma nota de 0 a 10!');
    return;
  }

  const novoFilme = {
    id: Date.now().toString(),
    titulo: titulo.trim(),
    nota: n,
    assistido: false,
  };

  setLista([...lista, novoFilme]);
  setTitulo('');
  setNota('');
}

// Marca ou desmarca um filme como assistido
export function marcarAssistido(id, lista, setLista) {
  const novaLista = lista.map((filme) => {
    if (filme.id === id) {
      return { ...filme, assistido: !filme.assistido };
    }
    return filme;
  });

  setLista(novaLista);
}

// Remove um filme da lista
export function removerFilme(id, lista, setLista) {
  const novaLista = lista.filter((filme) => filme.id !== id);
  setLista(novaLista);
}

// Conta quantos filmes ainda faltam assistir
export function contarPendentes(lista) {
  return lista.filter((filme) => !filme.assistido).length;
}

// Sorteia uma frase aleatória da lista de frases
export function sortearFrase(frases) {
  return frases[Math.floor(Math.random() * frases.length)];
}
