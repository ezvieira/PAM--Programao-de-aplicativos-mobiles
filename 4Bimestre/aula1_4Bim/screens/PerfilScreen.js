import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function PerfilScreen({ navigation, route }) {
  const email = route?.params?.email || 'usuario@email.com';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={styles.foto}
        />
        <Text style={styles.nome}>Seu Perfil</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Curso:</Text>
          <Text style={styles.value}>Análise e Desenvolvimento de Sistemas</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o app</Text>
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Telas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Filmes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>RN</Text>
            <Text style={styles.statLabel}>React Native</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.navigate('Home')}
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

      <Text style={styles.footer}>CineList v1.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#1E1E1E',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#aaa',
  },
  section: {
    backgroundColor: '#1E1E1E',
    margin: 15,
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFCDD2',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  label: {
    fontSize: 14,
    color: '#aaa',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'right',
    marginLeft: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EF5350',
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginBottom: 12,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
    paddingVertical: 20,
  },
});
