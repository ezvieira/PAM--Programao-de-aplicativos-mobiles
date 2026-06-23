import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  const [planta, setPlanta] = useState(null);

  const plantas = {
    babosa: {
      nome: 'Babosa',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Aloe_vera_flower_inset.png',
      descricao:
        'A Babosa (Aloe vera) é uma planta medicinal conhecida por suas propriedades cicatrizantes, hidratantes e anti-inflamatórias.',
    },

    abacateiro: {
      nome: 'Abacateiro',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Avocado_tree.jpg',
      descricao:
        'O Abacateiro é uma árvore frutífera que produz o abacate, fruto rico em vitaminas, minerais e gorduras saudáveis.',
    },

    rosa: {
      nome: 'Rosa',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Rose_pink_1.jpg',
      descricao:
        'A Rosa é uma das flores mais populares do mundo, conhecida por sua beleza, perfume e simbolismo relacionado ao amor.',
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Catálogo de Plantas</Text>

      <View style={styles.botoes}>
        <Button title="Babosa" onPress={() => setPlanta(plantas.babosa)} />
      </View>

      <View style={styles.botoes}>
        <Button title="Abacateiro" onPress={() => setPlanta(plantas.abacateiro)} />
      </View>

      <View style={styles.botoes}>
        <Button title="Rosa" onPress={() => setPlanta(plantas.rosa)} />
      </View>

      {planta && (
        <View style={styles.card}>
          <Text style={styles.nome}>{planta.nome}</Text>

          <Image
            source={{ uri: planta.imagem }}
            style={styles.imagem}
          />

          <Text style={styles.descricao}>{planta.descricao}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    flexGrow: 1,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  botoes: {
    width: '80%',
    marginVertical: 5,
  },

  card: {
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  imagem: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
  },
});