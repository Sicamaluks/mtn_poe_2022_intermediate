import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import CustomCard from "../CustomCard";

export default function Home() {
  return (
    <SafeAreaView>
      <CustomCard noteTitle="test" noteContent="test" />
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
