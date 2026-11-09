import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import PrimaryButton from '../components/PrimaryButton';

export default function Home({ navigation }) {
  const [registros, setRegistros] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    const consulta = query(
      collection(db, 'usuarios', uid, 'registros'),
      orderBy('criadoEm', 'desc')
    );
    const unsubscribe = onSnapshot(consulta, (snapshot) => {
      setRegistros(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })));
      setCarregando(false);
    }, (error) => {
      console.log(error);
      setCarregando(false);
      Alert.alert('Erro', 'Não foi possível carregar os registros.');
    });
    return unsubscribe;
  }, []);

  async function sair() {
    try { await signOut(auth); }
    catch { Alert.alert('Erro', 'Não foi possível sair da conta.'); }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Editar', { mode: 'edit', registro: item })}
      >
        <View style={styles.itemTop}>
          <Text style={styles.itemTitle}>{item.titulo}</Text>
          <Text style={styles.editLabel}>EDITAR</Text>
        </View>
        <Text style={styles.description} numberOfLines={3}>{item.descricao}</Text>
        {!!item.categoria && <Text style={styles.category}>{item.categoria}</Text>}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <View style={{ flex: 1 }}>
          <Text style={styles.hello}>Seus registros</Text>
          <Text style={styles.sub}>{registros.length} {registros.length === 1 ? 'item salvo' : 'itens salvos'}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.smallButton}><Text style={styles.smallText}>Perfil</Text></TouchableOpacity>
      </View>

      <PrimaryButton title="+ Novo registro" onPress={() => navigation.navigate('Editar', { mode: 'create' })} />

      {carregando ? (
        <Text style={styles.empty}>Carregando registros...</Text>
      ) : (
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={registros.length === 0 ? styles.emptyList : { paddingBottom: 24 }}
          ListEmptyComponent={<Text style={styles.empty}>Você ainda não tem registros. Toque em “Novo registro” para cadastrar o primeiro.</Text>}
        />
      )}

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}><Text style={styles.footerLink}>Sobre o app</Text></TouchableOpacity>
        <TouchableOpacity onPress={sair}><Text style={styles.logout}>Sair da conta</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  welcome: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  hello: { fontSize: 25, fontWeight: '800', color: '#17233D' },
  sub: { color: '#727C91', marginTop: 4 },
  smallButton: { backgroundColor: '#E8EDFF', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 },
  smallText: { color: '#3157D5', fontWeight: '700' },
  item: { backgroundColor: '#FFFFFF', padding: 17, borderRadius: 14, marginTop: 14, borderWidth: 1, borderColor: '#E6EAF2' },
  itemTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  itemTitle: { color: '#17233D', fontSize: 17, fontWeight: '800', flex: 1, marginRight: 10 },
  editLabel: { color: '#3157D5', fontSize: 11, fontWeight: '800' },
  description: { color: '#5F687B', marginTop: 9, lineHeight: 20 },
  category: { alignSelf: 'flex-start', marginTop: 12, color: '#3157D5', backgroundColor: '#EEF1FF', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, fontSize: 12, fontWeight: '600' },
  empty: { color: '#7B8496', textAlign: 'center', lineHeight: 23, paddingHorizontal: 25, marginTop: 50 },
  emptyList: { flexGrow: 1, justifyContent: 'center' },
  footer: { borderTopWidth: 1, borderTopColor: '#E1E5ED', paddingTop: 15, marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' },
  footerLink: { color: '#3157D5', fontWeight: '600' },
  logout: { color: '#C23B4A', fontWeight: '600' }
});
