import { StatusBar } from "expo-status-bar";
// importando tags react native
import { StyleSheet, Text, View } from "react-native";

// importando component react
import Cesta from "./src/telas/Cesta";

// é assim q cria componentes, voce cria componentes retornando uma função no react
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
