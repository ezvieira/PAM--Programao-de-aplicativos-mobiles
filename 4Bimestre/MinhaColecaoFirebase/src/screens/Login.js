import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function fazerLogin() {
    if (!email.trim() || !senha) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email.trim(), senha);
    } catch (error) {
      const mensagem = error.code === 'auth/invalid-credential' ||
        error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
        ? 'E-mail ou senha incorretos.'
        : error.code === 'auth/invalid-email' ? 'Digite um e-mail válido.' : 'Não foi possível entrar. Verifique sua conexão.';
      Alert.alert('Erro no login', mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.logo}><Text style={styles.logoText}>MC</Text></View>
        <Text style={styles.title}>Minha Coleção</Text>
        <Text style={styles.subtitle}>Entre para acessar seus registros.</Text>
        <View style={styles.card}>
          <FormInput label="E-mail" value={email} onChangeText={setEmail} placeholder="seuemail@exemplo.com" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
          <FormInput label="Senha" value={senha} onChangeText={setSenha} placeholder="Digite sua senha" secureTextEntry />
          <PrimaryButton title="Entrar" onPress={fazerLogin} loading={loading} />
          <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}>Ainda não tem uma conta? Cadastre-se</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  logo: { width: 76, height: 76, borderRadius: 24, backgroundColor: '#3157D5', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  logoText: { color: '#FFF', fontSize: 27, fontWeight: '900' },
  title: { fontSize: 28, fontWeight: '800', color: '#17233D', textAlign: 'center' },
  subtitle: { color: '#727C91', textAlign: 'center', marginTop: 7, marginBottom: 25 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 18, elevation: 2 },
  link: { color: '#3157D5', textAlign: 'center', marginTop: 20, fontWeight: '600' }
});
