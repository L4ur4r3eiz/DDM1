import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel Principal</Text>
      <Text style={styles.subtitulo}>Você está conectado com sucesso!</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Status da Conta</Text>
        <Text style={styles.cardTexto}>• Perfil Ativo</Text>
        <Text style={styles.cardTexto}>• Nível: Estudante DDM</Text>
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Avançar para Perfil (Tela 3)"
          onPress={() => navigation.navigate('Perfil')}
          color="#F12D81"
        />
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Sair / Voltar para Login"
          onPress={() => navigation.navigate('Login')}
          color="#e43b36"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 5, color: '#333', textAlign: 'center' },
  subtitulo: { fontSize: 14, color: '#666', marginBottom: 25, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 25, borderWidth: 1, borderColor: '#ddd' },
  cardTitulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  cardTexto: { fontSize: 14, color: '#555', marginBottom: 5 },
  espacoBotao: { marginBottom: 12, borderRadius: 8, overflow: 'hidden' },
});