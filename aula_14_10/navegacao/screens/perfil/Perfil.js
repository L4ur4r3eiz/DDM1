import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>
      <Text style={styles.subtitulo}>Terceira tela do aplicativo</Text>

      <View style={styles.infoBox}>
        <Text style={styles.labelInfo}>Nome:</Text>
        <Text style={styles.valorInfo}>Laura (Aluna DDM)</Text>

        <Text style={styles.labelInfo}>Curso:</Text>
        <Text style={styles.valorInfo}>Técnico em Informática</Text>

        <Text style={styles.labelInfo}>Semestre:</Text>
        <Text style={styles.valorInfo}>2026</Text>
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Ver Tela Sobre (Tela 4)"
          onPress={() => navigation.navigate('Sobre')}
          color="#F12D81"
        />
      </View>

      <View style={styles.espacoBotao}>
        <Button
          title="Voltar para Home"
          onPress={() => navigation.goBack()}
          color="#6c757d"
        />
      </View>
    </View>
  );
}