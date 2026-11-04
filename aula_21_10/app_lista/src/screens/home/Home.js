import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import styles from './Estilo';
import { adicionarQuadrinho } from '../../funcoes/Funcoe';

export default function Home({ route }) {
  const { nomeLeitor } = route.params || { nomeLeitor: 'Leitor' };
  
  const [hqTexto, setHqTexto] = useState('');
  const [listaHqs, setListaHqs] = useState([
    { id: '1', titulo: 'Guerras Secretas #1' },
    { id: '2', titulo: 'Vingadores: A Queda' },
    { id: '3', titulo: 'O Invencível Homem-Ferro' },
  ]);

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Camada escura translúcida para proteger a leitura e não ofuscar as letras */}
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Base de Dados, {nomeLeitor}</Text>
          <Text style={styles.subtitulo}>Gerencie sua coleção de HQs favoritas</Text>

          <Text style={styles.label}>Cadastrar Novo Quadrinho</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Vingadores: Doomsday Prelúdio..."
            placeholderTextColor="#94A3B8"
            value={hqTexto}
            onChangeText={setHqTexto}
          />

          <View style={styles.botao}>
            <Button
              title="Adicionar à Lista"
              onPress={() => adicionarQuadrinho(hqTexto, listaHqs, setListaHqs, setHqTexto)}
              color="#F12D81"
            />
          </View>

          <Text style={styles.secaoLista}>Quadrinhos na Estante:</Text>

          <FlatList
            data={listaHqs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.nomeItem}> {item.titulo}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}