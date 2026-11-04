import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    // Camada escura translúcida (deixa o fundo de quadrinhos visível, mas escuro o suficiente para destacar as letras)
    backgroundColor: 'rgba(15, 23, 42, 0.85)', 
  },
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#E2E8F0',
  },
  input: {
    height: 48,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 15,
    color: '#FFFFFF',
  },
  botao: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  secaoLista: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
    borderLeftWidth: 4,
    borderLeftColor: '#F12D81',
  },
  nomeItem: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;