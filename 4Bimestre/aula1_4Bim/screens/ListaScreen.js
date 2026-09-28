import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../Estilo';
import {
  adicionarFilme,
  marcarAssistido,
  removerFilme,
  contarPendentes,
} from '../Funcoes';

export default function ListaScreen() {
  const [titulo, setTitulo] = useState('');
  const [nota, setNota] = useState('');
  const [lista, setLista] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Watchlist</Text>

      <Text style={styles.label}>Filme</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Matrix"
        placeholderTextColor="#777"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Nota esperada (0 a 10)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 9"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={nota}
        onChangeText={setNota}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() =>
          adicionarFilme(titulo, nota, lista, setLista, setTitulo, setNota)
        }
      >
        <Text style={styles.textoAdicionar}>Adicionar filme</Text>
      </TouchableOpacity>

      <Text style={styles.contador}>
        Faltam assistir: {contarPendentes(lista)}
      </Text>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Sua watchlist está vazia. Adicione o primeiro filme!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.areaTexto}
              onPress={() => marcarAssistido(item.id, lista, setLista)}
            >
              <Text
                style={[
                  styles.itemTexto,
                  item.assistido && styles.itemAssistido,
                ]}
              >
                {item.titulo}
              </Text>
              <Text style={styles.itemNota}>Nota esperada: {item.nota}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerFilme(item.id, lista, setLista)}
            >
              <Text style={styles.textoRemover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
