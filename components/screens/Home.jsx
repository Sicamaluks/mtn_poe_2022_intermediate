import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import CustomCard from "../CustomCard";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("NoteDetail")}>
        <CustomCard noteTitle="test" noteContent="test" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6699CC",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
