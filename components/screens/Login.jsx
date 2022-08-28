import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
} from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState("Username");
  const [password, onChangePassword] = React.useState("Password");
  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/splash.png")}
          style={styles.logo}
        />
        <Text style={{ color: "black", fontSize: 25 }}>
          Welcome, please login
        </Text>
      </View>
      <View>
        <TextInput
          onTouchCancel={Keyboard.dismiss}
          style={styles.input}
          onChangeUsername={onChangeUsername}
          placeholder={username}
        />
        {username.length > 3 ? null : (
          <Text style={{ color: "red" }}>Enter your username</Text>
        )}
        <TextInput
          onSelectionChange={Keyboard.dismiss}
          style={styles.input}
          onChangePassword={onChangePassword}
          placeholder={password}
          secureText
        />
        {password.length > 3 ? null : (
          <Text style={{ color: "red" }}>Enter your username</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss;
          navigation.navigate("Home");
          return true;
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    top: 10,
    bottom: 20,
    width: 350,
    height: 350,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContents: "center",
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6699CC",
    padding: 10,
    margin: 30,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
