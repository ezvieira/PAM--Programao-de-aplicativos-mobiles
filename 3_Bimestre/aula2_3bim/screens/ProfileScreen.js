import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation, route }) {
  const email = route?.params?.email || 'usuário@email.com';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Seu Perfil</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>📧 Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>👤 Nome:</Text>
          <Text style={styles.value}>Estudante PAM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>🎓 Curso:</Text>
          <Text style={styles.value}>Análise e Desenvolvimento de Sistemas</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estatísticas</Text>
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Telas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>✓</Text>
            <Text style={styles.statLabel}>Navegação</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>📱</Text>
            <Text style={styles.statLabel}>React Native</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notificações</Text>
          <Text style={styles.badge}>Ativadas</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Tema</Text>
          <Text style={styles.badge}>Claro</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Idioma</Text>
          <Text style={styles.badge}>Português</Text>
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

      <Text style={styles.footer}>App PAM v1.0 • Programação de Aplicativos Mobile</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
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
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 14,
    color: '#333',
  },
  badge: {
    backgroundColor: '#007AFF',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginBottom: 12,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    paddingVertical: 20,
  },
});
