import "react-native-gesture-handler";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Inicio } from "./Views/Inicio";
import { Nosotros } from "./Views/Nosotros";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{ title: "Componente principal" }}
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
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
