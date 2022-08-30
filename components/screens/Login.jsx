import {
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
import styles from "./styles";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLoginPress = () => {
    navigation.navigate("Home", { user: "Sicamaluks2014@gmail.com" });
  };

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
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
            style={{ ...styles.input, width: 345 }}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          disabled={email.length < 3 || password.length < 3 ? true : false}
          onPress={() => {
            navigation.navigate("Home", { user: { email } });
            return;
          }}
        >
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
