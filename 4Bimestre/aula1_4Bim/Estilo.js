import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFCDD2',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFCDD2',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: '#B71C1C',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoAdicionar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFCDD2',
    marginBottom: 8,
  },
  lista: {
    flex: 1,
  },
  vazio: {
    textAlign: 'center',
    color: '#888',
    marginTop: 30,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#B71C1C',
  },
  areaTexto: {
    flex: 1,
  },
  itemTexto: {
    fontSize: 16,
    color: '#fff',
  },
  itemNota: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 2,
  },
  itemAssistido: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
  botaoRemover: {
    backgroundColor: '#C0392B',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  textoRemover: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
