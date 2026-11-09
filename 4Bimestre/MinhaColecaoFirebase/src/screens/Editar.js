import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';

export default function Editar({ route, navigation }) {
  const registro = route.params?.registro;
  const modoCriacao = route.params?.mode === 'create';
  const [titulo, setTitulo] = useState(registro?.titulo || '');
  const [descricao, setDescricao] = useState(registro?.descricao || '');
  const [categoria, setCategoria] = useState(registro?.categoria || '');
  const [loading, setLoading] = useState(false);

  async function salvar() {
    if (!titulo.trim() || !descricao.trim()) {
      Alert.alert('Atenção', 'Preencha o título e a descrição.');
      return;
    }
    const uid = auth.currentUser?.uid;
    if (!uid) {
      Alert.alert('Sessão expirada', 'Entre novamente na sua conta.');
      return;
    }
    try {
      setLoading(true);
      const dados = {
        titulo: titulo.trim(),
        descricao: descricao.trim(),
        categoria: categoria.trim(),
        atualizadoEm: serverTimestamp()
      };
      if (modoCriacao) {
        await addDoc(collection(db, 'usuarios', uid, 'registros'), {
          ...dados,
          criadoEm: serverTimestamp()
        });
        Alert.alert('Sucesso', 'Registro cadastrado!');
      } else {
        await updateDoc(doc(db, 'usuarios', uid, 'registros', registro.id), dados);
        Alert.alert('Sucesso', 'Registro atualizado!');
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível salvar. Verifique sua conexão e as regras do Firestore.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>{modoCriacao ? 'Adicionar à coleção' : 'Alterar registro'}</Text>
      <Text style={styles.helper}>Informe os dados abaixo. Os campos com * são obrigatórios.</Text>
      <View style={styles.card}>
        <FormInput label="Título *" value={titulo} onChangeText={setTitulo} placeholder="Ex.: Meu primeiro registro" />
        <FormInput label="Descrição *" value={descricao} onChangeText={setDescricao} placeholder="Escreva uma descrição..." multiline numberOfLines={5} />
        <FormInput label="Categoria" value={categoria} onChangeText={setCategoria} placeholder="Ex.: Estudos, pessoal, ideias..." />
        <PrimaryButton title={modoCriacao ? 'Salvar registro' : 'Atualizar registro'} onPress={salvar} loading={loading} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1 },
  heading: { color: '#17233D', fontSize: 24, fontWeight: '800' },
  helper: { color: '#727C91', marginTop: 7, marginBottom: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, elevation: 2 }
});
