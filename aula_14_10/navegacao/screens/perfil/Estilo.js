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
  infoBox: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  labelInfo: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
    marginTop: 10,
    textTransform: 'uppercase',
  },
  valorInfo: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
    marginTop: 2,
  },
  espacoBotao: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;