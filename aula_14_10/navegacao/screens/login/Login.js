import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Estilo';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Text style={styles.subtitulo}>Faça login para continuar</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          color="#F12D81"
        />
      </View>
    </View>
  );
}