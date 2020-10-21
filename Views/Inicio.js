import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      <Button
        title="Ir a nosotros"
        onPress={() => navigation.navigate("Nosotros", { name: "johnny" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
