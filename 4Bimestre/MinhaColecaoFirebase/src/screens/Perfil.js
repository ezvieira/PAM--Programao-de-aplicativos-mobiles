
import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ActivityIndicator, Alert,
  ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updateProfile
} from 'firebase/auth';

import {
  doc, getDoc, setDoc, serverTimestamp
} from 'firebase/firestore';

import { auth, db } from '../firebase/firebase';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

export default function Perfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const usuario = auth.currentUser;

        if (!usuario) return;

        const referencia = doc(db, 'usuarios', usuario.uid);
        const resultado = await getDoc(referencia);

        const dados = resultado.exists()
          ? resultado.data()
          : {};

        setNome(dados.nome || usuario.displayName || '');
        setEmail(usuario.email || '');
        setTelefone(dados.telefone || '');
        setCidade(dados.cidade || '');

      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o perfil.');
      } finally {
        setLoading(false);
      }
    }

    carregarPerfil();
  }, []);

  async function salvarPerfil() {
    const usuario = auth.currentUser;

    if (!usuario) {
      Alert.alert('Erro', 'Faça login novamente.');
      return;
    }

    const novoNome = nome.trim();
    const novoEmail = email.trim().toLowerCase();

    const emailMudou =
      novoEmail !== (usuario.email || '').toLowerCase();

    if (!novoNome || !novoEmail) {
      Alert.alert('Atenção', 'Nome e e-mail são obrigatórios.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(novoEmail)) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }

    if (emailMudou && !senhaAtual) {
      Alert.alert(
        'Atenção',
        'Digite sua senha atual para alterar o e-mail.'
      );
      return;
    }

    try {
      setSalvando(true);

      // Atualiza o e-mail no Firebase Authentication
      if (emailMudou) {
        const credencial = EmailAuthProvider.credential(
          usuario.email,
          senhaAtual
        );

        await reauthenticateWithCredential(usuario, credencial);
        await updateEmail(usuario, novoEmail);
      }

      // Atualiza o nome no Authentication
      await updateProfile(usuario, {
        displayName: novoNome
      });

      // Salva os demais dados no Firestore
      await setDoc(
        doc(db, 'usuarios', usuario.uid),
        {
          nome: novoNome,
          email: novoEmail,
          telefone: telefone.trim(),
          cidade: cidade.trim(),
          atualizadoEm: serverTimestamp()
        },
        { merge: true }
      );

      setSenhaAtual('');

      Alert.alert(
        'Sucesso!',
        'Seus dados foram atualizados.'
      );

    } catch (error) {
      console.log(error);

      let mensagem = 'Não foi possível atualizar seus dados.';

      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential'
      ) {
        mensagem = 'A senha atual está incorreta.';
      } else if (error.code === 'auth/email-already-in-use') {
        mensagem = 'Esse e-mail já está sendo utilizado.';
      } else if (error.code === 'auth/requires-recent-login') {
        mensagem = 'Entre novamente na conta e tente outra vez.';
      }

      Alert.alert('Erro', mensagem);

    } finally {
      setSalvando(false);
    }
  }

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1 }}
        size="large"
        color="#3157D5"
      />
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {(nome || 'U').charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.name}>
          {nome || 'Meu perfil'}
        </Text>

        <Text style={styles.subtitle}>
          Edite suas informações pessoais.
        </Text>

        <View style={styles.card}>
          <FormInput
            label="Nome completo"
            value={nome}
            onChangeText={setNome}
            placeholder="Seu nome"
          />

          <FormInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="seuemail@exemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            label="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(11) 99999-9999"
            keyboardType="phone-pad"
          />

          <FormInput
            label="Cidade"
            value={cidade}
            onChangeText={setCidade}
            placeholder="Sua cidade"
          />

          {email.trim().toLowerCase() !==
            (auth.currentUser?.email || '').toLowerCase() && (
            <FormInput
              label="Senha atual"
              value={senhaAtual}
              onChangeText={setSenhaAtual}
              placeholder="Digite sua senha"
              secureTextEntry
            />
          )}

          <PrimaryButton
            title="Salvar alterações"
            onPress={salvarPerfil}
            loading={salvando}
          />
        </View>

        <View style={styles.idCard}>
          <Text style={styles.label}>ID DO USUÁRIO</Text>
          <Text style={styles.uid}>
            {auth.currentUser?.uid}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 22,
    alignItems: 'center'
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#3157D5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800'
  },
  name: {
    color: '#17233D',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 12
  },
  subtitle: {
    color: '#727C91',
    marginTop: 5,
    marginBottom: 18
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    elevation: 2
  },
  idCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 16,
    borderRadius: 14,
    marginTop: 14
  },
  label: {
    color: '#8A93A4',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1
  },
  uid: {
    color: '#5F687B',
    fontSize: 11,
    marginTop: 7
  }
});
