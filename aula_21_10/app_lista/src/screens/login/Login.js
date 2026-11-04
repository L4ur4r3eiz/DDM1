import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import styles from './Estilo';

export default function Login({ navigation }) {
  const [leitor, setLeitor] = useState('');

  function entrarNoApp() {
    navigation.navigate('Home', { nomeLeitor: leitor || 'Colecionador' });
  }

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1588497854682-9426f2f6da22?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <Text style={styles.titulo}>Portal dos HQs</Text>
        <Text style={styles.subtitulo}>
          Prepare-se para o Doomsday. Digite seu codinome para acessar sua lista de leituras.
        </Text>

        <Text style={styles.label}>Nome do Leitor / Herói</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Peter Parker"
          placeholderTextColor="#64748B"
          value={leitor}
          onChangeText={setLeitor}
        />

        <View style={styles.botao}>
          <Button
            title="Entrar no Quartel-General"
            onPress={entrarNoApp}
            color="#F12D81"
          />
        </View>
      </View>
    </ImageBackground>
  );
}