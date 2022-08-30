import {
  View,
  Text,
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

const db = app.firestore;

export default function Home(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomCard noteTitle="test" noteContent="test" />
      </ScrollView>
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
