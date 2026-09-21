import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#EEF3F1',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F4E3D',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1F4E3D',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B7CBC3',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: '#1F6F54',
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
    color: '#1F4E3D',
    marginBottom: 8,
  },
  lista: {
    flex: 1,
  },
  vazio: {
    textAlign: 'center',
    color: '#6B8078',
    marginTop: 30,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  areaTexto: {
    flex: 1,
  },
  itemTexto: {
    fontSize: 16,
    color: '#1B1B1B',
  },
  itemComprado: {
    textDecorationLine: 'line-through',
    color: '#8A9A93',
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