import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomCard from "../CustomCard";
import "firebase/firestore";
import app from "../../config/firebase";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Notes from "../Notes";

export default function Home(props) {
  return <Notes />;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6699CC",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
