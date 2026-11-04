import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Aplicativo</Text>
      <Text style={styles.subtitulo}>Quarta tela do fluxo de navegação</Text>

      <View style={styles.card}>
        <Text style={styles.textoCard}>
          Este aplicativo foi desenvolvido como atividade prática da disciplina de DDM, implementando o Stack Navigator com quatro telas funcionais integradas.
        </Text>
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Reiniciar Navegação (Voltar ao Login)"
          onPress={() => navigation.navigate('Login')}
          color="#d9534f"
        />
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Voltar à Tela Anterior"
          onPress={() => navigation.goBack()}
          color="#6c757d"
        />
      </View>
    </View>
  );
}