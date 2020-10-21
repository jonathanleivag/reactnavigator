import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Nosotros = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title="Volver" onPress={() => navigation.navigate("Inicio")} />
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
