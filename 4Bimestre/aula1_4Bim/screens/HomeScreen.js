import { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { sortearFrase } from '../Funcoes';

const frases = [
  'Hoje é dia de maratona!',
  'Pipoca pronta, luzes apagadas.',
  'Um bom filme resolve qualquer domingo.',
  'Só mais um episódio... quer dizer, só mais um filme.',
  'O melhor filme é aquele que você ainda não viu.',
];

const filmes = {
  matrix: {
    titulo: 'Matrix',
    ano: 1999,
    genero: 'Ficção científica',
    sinopse:
      'Um programador descobre que a realidade em que vive é uma simulação criada por máquinas e se junta a um grupo de rebeldes para libertar a humanidade. O filme mistura ação, filosofia e efeitos visuais que marcaram uma geração. Depois de conhecer a verdade, Neo precisa decidir se está pronto para assumir o papel que esperam dele.',
  },
  interestelar: {
    titulo: 'Interestelar',
    ano: 2014,
    genero: 'Ficção científica',
    sinopse:
      'Com a Terra ameaçada por uma crise de alimentos, um grupo de astronautas atravessa um buraco de minhoca em busca de um novo planeta para a humanidade. Enquanto isso, o tempo passa de forma diferente para quem ficou em casa, e a viagem cobra um preço emocional enorme.',
  },
  divertidamente: {
    titulo: 'Divertida Mente',
    ano: 2015,
    genero: 'Animação',
    sinopse:
      'Dentro da cabeça de uma garota de 11 anos vivem Alegria, Tristeza, Raiva, Medo e Nojinho. Quando a família se muda de cidade, as emoções precisam aprender a trabalhar juntas para ajudá-la a lidar com a mudança. Uma animação que fala sobre crescer e sobre a importância de sentir tristeza.',
  },
};

export default function HomeScreen({ navigation, route }) {
  const userEmail = route?.params?.userEmail || 'Usuário';

  const [frase, setFrase] = useState(frases[0]);
  const [filme, setFilme] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Olá, {userEmail}!</Text>
      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity
        style={styles.botaoFrase}
        onPress={() => setFrase(sortearFrase(frases))}
      >
        <Text style={styles.textoBotaoFrase}>Nova frase</Text>
      </TouchableOpacity>

      <Text style={styles.secao}>Filmes em destaque</Text>

      {Object.values(filmes).map((f) => (
        <View key={f.titulo} style={styles.botoes}>
          <Button title={f.titulo} onPress={() => setFilme(f)} color="#B71C1C" />
        </View>
      ))}

      {filme && (
        <View style={styles.card}>
          <Text style={styles.nomeFilme}>{filme.titulo}</Text>
          <Text style={styles.detalhe}>
            {filme.ano} • {filme.genero}
          </Text>

          <ScrollView style={styles.contSinopse} nestedScrollEnabled={true}>
            <Text style={styles.sinopse}>{filme.sinopse}</Text>
          </ScrollView>
        </View>
      )}

      <View style={styles.navegacao}>
        <View style={styles.botoes}>
          <Button
            title="Minha Watchlist"
            onPress={() => navigation.navigate('Lista')}
            color="#007AFF"
          />
        </View>
        <View style={styles.botoes}>
          <Button
            title="Meu Perfil"
            onPress={() => navigation.navigate('Perfil', { email: userEmail })}
            color="#007AFF"
          />
        </View>
        <View style={styles.botoes}>
          <Button
            title="Fazer Logout"
            onPress={() => navigation.navigate('Login')}
            color="#FF3B30"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFCDD2',
    textAlign: 'center',
    marginBottom: 10,
  },
  frase: {
    fontSize: 16,
    color: '#ddd',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 12,
  },
  botaoFrase: {
    alignSelf: 'center',
    backgroundColor: '#B71C1C',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 24,
  },
  textoBotaoFrase: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  botoes: {
    marginVertical: 5,
  },
  card: {
    marginTop: 16,
    padding: 15,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#B71C1C',
  },
  nomeFilme: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  detalhe: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 2,
    marginBottom: 10,
  },
  contSinopse: {
    maxHeight: 110,
  },
  sinopse: {
    fontSize: 15,
    color: '#ddd',
    lineHeight: 21,
  },
  navegacao: {
    marginTop: 30,
  },
});
