import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Estilo';
import { calcularIMC } from './Funcoes';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  function handleCalcular() {
    calcularIMC(peso, altura, setResultado, setClassificacao);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 70"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.label}>Altura (m)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.botaoCalcular} onPress={handleCalcular}>
        <Text style={styles.textoCalcular}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>IMC: {resultado}</Text>
          <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
      )}
    </View>
  );
}
