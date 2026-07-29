import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [frase, setFrase] = useState('Eu sou o Batman.');

  const frases = [
    'Eu sou o Batman.',
    'Não é quem eu sou por dentro, mas o que eu faço que me define.',
    'A noite é mais escura pouco antes do amanhecer.',
    'Gotham precisa de mim.',
    'É isso que eu faço: assusto pessoas.',
  ];

  function trocarFrase() {
    const proxima = frases[Math.floor(Math.random() * frases.length)];
    setFrase(proxima);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Bat-sinal desenhado com Views */}
      <View style={styles.batsinalContainer}>
        <View style={styles.batsinalCirculo}>
          <Text style={styles.batsinalIcone}>🦇</Text>
        </View>
      </View>

      <Text style={styles.titulo}>BATMAN</Text>
      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={trocarFrase}>
        <Text style={styles.textoBotao}>Chamar o Batman</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  batsinalContainer: {
    marginBottom: 20,
  },
  batsinalCirculo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD700',
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  batsinalIcone: {
    fontSize: 70,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
    letterSpacing: 4,
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});