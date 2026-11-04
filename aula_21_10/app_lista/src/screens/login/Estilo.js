import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.88)', // Camada escura translúcida para legibilidade
    justifyContent: 'center',
    padding: 25,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(241, 45, 129, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F12D81',
  },
  badgeText: {
    color: '#F12D81',
    fontWeight: '700',
    fontSize: 12,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#94A3B8',
    marginBottom: 30,
    lineHeight: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#E2E8F0',
  },
  input: {
    height: 48,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 15,
    color: '#FFFFFF',
  },
  botao: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;