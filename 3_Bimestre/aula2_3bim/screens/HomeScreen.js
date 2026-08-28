import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const userEmail = route?.params?.userEmail || 'Usuário';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email do usuário:</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>

      <Text style={styles.description}>
        Esta é a tela principal do aplicativo. Você pode navegar para sua página de perfil ou fazer logout.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Profile', { email: userEmail })}
          color="#007AFF"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Fazer Logout"
          onPress={() => navigation.navigate('Login')}
          color="#FF3B30"
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>📱 Informações do App:</Text>
        <Text style={styles.infoText}>• Desenvolvido com React Native</Text>
        <Text style={styles.infoText}>• Utiliza Expo para prototipagem rápida</Text>
        <Text style={styles.infoText}>• Navegação com React Navigation</Text>
        <Text style={styles.infoText}>• Stack Navigator com 3 telas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'justify',
  },
  buttonContainer: {
    marginBottom: 12,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
    lineHeight: 18,
  },
});
