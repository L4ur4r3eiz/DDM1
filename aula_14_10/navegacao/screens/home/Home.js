import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à Home!</Text>
      <Text style={styles.subtitulo}>Você fez login com sucesso.</Text>

      <View style={styles.botao}>
        <Button
          title="Sair / Voltar para Login"
          onPress={() => navigation.navigate('Login')}
          color="#d9534f"
        />
      </View>
    </View>
  );
}