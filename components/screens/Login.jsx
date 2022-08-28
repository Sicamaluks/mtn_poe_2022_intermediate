import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState("Username");
  const [password, onChangePassword] = React.useState("Password");
  const handleLogin = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavor="padding" enabled>
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
            secureTextEntry
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    left: 30,
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    margin: 12,
    width: 350,
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
