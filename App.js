import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importando o componente Cesta a partir do diretório;
import Cesta from "./src/telas/cesta";


export default function App() {
  return (
    <View style={styles.container}>
      <Cesta />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    color: "black",
    fontSize: "12px",
    textAlign: "center"
  }
});
