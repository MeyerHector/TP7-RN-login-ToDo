import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { router } from "expo-router";

import { TextInput, Button } from "react-native-paper";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name.length < 5 || name.length > 10) {
      Alert.alert("El nombre debe tener entre 5 y 10 caracteres");
      return;
    }
    if (password === "") {
      alert("La contraseña no puede estar vacia");
      return;
    }
    router.navigate("explore");
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.mainText}>Iniciar sesion</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button style={styles.formInput} mode="contained" onPress={handleSubmit}>
        Ingresar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: "100%",
    width: "100%",
  },
  formInput: {
    width: "80%",
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    paddingBottom: 16,
  },
});
