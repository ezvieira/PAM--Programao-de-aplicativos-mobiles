import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titulo}>
        <Text>Tela</Text>
      </View>

      <ScrollView style={styles.cont_texto}>
        <Text>
          A curiosidade é uma das características mais marcantes da natureza humana...
          (resto do texto aqui)
        </Text>
      </ScrollView>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite algo aqui"
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    padding: 10,
    alignItems: 'center',
  },
  cont_texto: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    margin: 10,
  },
});