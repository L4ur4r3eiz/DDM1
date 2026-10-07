import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text>digite aqui</Text>
        <TextInput placehoder='teste'></TextInput>
        <Button onPress='' title='botão'></Button>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  Scflex: {
    flex: 1,
    backgroundColor: "#d6b3b3"
  },

  container: {
    flex: 1,
    backgroundColor: '#d88787',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
