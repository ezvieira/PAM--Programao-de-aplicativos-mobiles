import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function cadastrar() {
    if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }
    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    try {
      setLoading(true);
      const resultado = await createUserWithEmailAndPassword(auth, email.trim(), senha);
      await setDoc(doc(db, 'usuarios', resultado.user.uid), {
        nome: nome.trim(),
        email: email.trim(),
        criadoEm: serverTimestamp()
      });
      Alert.alert('Sucesso', 'Conta criada! Você já pode usar o aplicativo.');
    } catch (error) {
      const mensagem = error.code === 'auth/email-already-in-use' ? 'Este e-mail já está cadastrado.'
        : error.code === 'auth/invalid-email' ? 'Digite um e-mail válido.'
        : error.code === 'auth/weak-password' ? 'A senha precisa ter pelo menos 6 caracteres.'
        : 'Não foi possível criar a conta. Confira a configuração do Firebase.';
      Alert.alert('Erro no cadastro', mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Criar uma conta</Text>
        <Text style={styles.subtitle}>Preencha os dados para começar.</Text>
        <View style={styles.card}>
          <FormInput label="Nome" value={nome} onChangeText={setNome} placeholder="Seu nome" />
          <FormInput label="E-mail" value={email} onChangeText={setEmail} placeholder="seuemail@exemplo.com" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
          <FormInput label="Senha" value={senha} onChangeText={setSenha} placeholder="Mínimo de 6 caracteres" secureTextEntry />
          <FormInput label="Confirmar senha" value={confirmarSenha} onChangeText={setConfirmarSenha} placeholder="Digite a senha novamente" secureTextEntry />
          <PrimaryButton title="Cadastrar" onPress={cadastrar} loading={loading} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 27, fontWeight: '800', color: '#17233D' },
  subtitle: { color: '#727C91', marginTop: 7, marginBottom: 22 },
  card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 18, elevation: 2 }
});
