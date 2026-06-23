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
          O ambicioso Relâmpago McQueen sonha em vencer a Copa Pistão e conseguir um patrocínio milionário. Devido à sua pressa e arrogância, ele se perde e vai parar em Radiator Springs, uma pacata cidade na Rota 66. Lá, ele faz amizades leais, como o caminhão Mate e a advogada Sally, e aprende com o veterano Doc Hudson que ganhar não é tudo
          
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