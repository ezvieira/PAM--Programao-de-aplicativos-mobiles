import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './Estilo';
import {
  adicionarItem,
  marcarComprado,
  removerItem,
  contarPendentes,
} from './Funcoes';

export default function App() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <Text style={styles.label}>Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Arroz"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          adicionarItem(
            nome,
            quantidade,
            lista,
            setLista,
            setNome,
            setQuantidade
          )
        }
      >
        <Text style={styles.textoAdicionar}>Adicionar item</Text>
      </TouchableOpacity>

      <Text style={styles.contador}>
        Faltam comprar: {contarPendentes(lista)}
      </Text>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Sua lista está vazia. Adicione o primeiro item!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.areaTexto}
              onPress={() => marcarComprado(item.id, lista, setLista)}
            >
              <Text
                style={[
                  styles.itemTexto,
                  item.comprado && styles.itemComprado,
                ]}
              >
                {item.quantidade}x {item.nome}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerItem(item.id, lista, setLista)}
            >
              <Text style={styles.textoRemover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}