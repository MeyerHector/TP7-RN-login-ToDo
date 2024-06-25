import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a MisPendientes!</Text>
        <Text style={styles.subtitle}>Funciones disponibles:</Text>
        <Text style={styles.action}>- Agregar un ToDo</Text>
        <Text style={styles.action}>- Marcar un ToDo como completado</Text>
        <Text style={styles.action}>- Eliminar un ToDo</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  action: {
    fontSize: 16,
    marginBottom: 4,
  },
});
