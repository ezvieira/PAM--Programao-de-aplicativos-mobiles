import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const vilaos = [
    { id: '1', nome: 'Coringa', alterEgo: 'Desconhecido', perigo: 'Extremo' },
    { id: '2', nome: 'Charada', alterEgo: 'Edward Nygma', perigo: 'Alto' },
    { id: '3', nome: 'Pinguim', alterEgo: 'Oswald Cobblepot', perigo: 'Médio' },
    { id: '4', nome: 'Hera Venenosa', alterEgo: 'Pamela Isley', perigo: 'Alto' },
    { id: '5', nome: 'Duas-Caras', alterEgo: 'Harvey Dent', perigo: 'Alto' },
    { id: '6', nome: 'Espantalho', alterEgo: 'Jonathan Crane', perigo: 'Extremo' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ficha Criminal de Gotham</Text>
      <Text style={styles.subtitulo}>Vilões monitorados pela GCPD</Text>

      <FlatList
        data={vilaos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>Identidade: {item.alterEgo}</Text>
            <Text style={styles.info}>Nível de perigo: {item.perigo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4c542',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#f4c542',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 2,
  },
});