import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}><Text style={styles.logoText}>MC</Text></View>
      <Text style={styles.title}>Minha Coleção</Text>
      <Text style={styles.version}>Versão 1.0.0</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Aplicativo desenvolvido como atividade de Programação de Aplicativos Mobile (PAM).</Text>
        <Text style={styles.text}>O projeto utiliza React Native, Expo, Firebase Authentication e Cloud Firestore.</Text>
        <Text style={styles.text}>Funcionalidades implementadas: cadastro e login de usuários, criação, consulta e atualização de registros.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 76, height: 76, borderRadius: 24, backgroundColor: '#3157D5', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#FFF', fontSize: 27, fontWeight: '900' },
  title: { color: '#17233D', fontSize: 25, fontWeight: '800', marginTop: 15 },
  version: { color: '#8992A3', marginTop: 5, marginBottom: 25 },
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 20, width: '100%' },
  text: { color: '#596478', lineHeight: 23, marginBottom: 14 }
});
