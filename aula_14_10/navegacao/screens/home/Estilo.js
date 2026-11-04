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
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1E293B',
  },
  cardTexto: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 6,
  },
  espacoBotao: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
    
  },
});

export default styles;