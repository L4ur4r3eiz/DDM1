import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 5,
    color: '#1E293B',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 25,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  textoCard: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    textAlign: 'center',
  },
  espacoBotao: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;