import {
  StyleSheet,
  Text,
  TextInput,
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
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  var errorMsg = "";

  const inputFieldsValidator = (field) => {
    field.length > 3
      ? (errorMsg = "")
      : (errorMsg = "Please fill in all form field");
  };
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
            style={styles.input}
            onChangeText={onChangeUsername}
            onBlur={inputFieldsValidator}
            placeholder="Enter Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            placeholder="Enter Password"
            secureTextEntry
          />
          {errorMsg != "" ? null : (
            <Text style={{ color: "red", marginLeft: 18 }}>{errorMsg}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          disabled={username.length < 3 || password.length < 3 ? true : false}
          onPress={() => {
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
    borderColor: "#6699CC",
    fontSize: 18,
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
  buttonDisabled: {
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
