import { Alert } from 'react-native';

// Adiciona um item novo na lista (com validação dos inputs)
export function adicionarItem(
  nome,
  quantidade,
  lista,
  setLista,
  setNome,
  setQuantidade
) {
  const qtd = Number(quantidade);

  if (nome.trim() === '') {
    Alert.alert('Erro', 'Digite o nome do item!');
    return;
  }

  if (quantidade === '' || isNaN(qtd) || qtd <= 0) {
    Alert.alert('Erro', 'Digite uma quantidade maior que zero!');
    return;
  }

  const novoItem = {
    id: Date.now().toString(),
    nome: nome.trim(),
    quantidade: qtd,
    comprado: false,
  };

  setLista([...lista, novoItem]);
  setNome('');
  setQuantidade('');
}

// Marca ou desmarca um item como comprado
export function marcarComprado(id, lista, setLista) {
  const novaLista = lista.map((item) => {
    if (item.id === id) {
      return { ...item, comprado: !item.comprado };
    }
    return item;
  });

  setLista(novaLista);
}

// Remove um item da lista
export function removerItem(id, lista, setLista) {
  const novaLista = lista.filter((item) => item.id !== id);
  setLista(novaLista);
}

// Conta quantos itens ainda faltam comprar
export function contarPendentes(lista) {
  return lista.filter((item) => !item.comprado).length;
}