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

// const db = app.firestore;

export default function Home(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <CustomCard noteTitle="test" noteContent="test" /> */}
        <Notes />
        <View style={{ alignItems: "center" }}>
          <Icon
            name="camera"
            size={200}
            color="#6699cc"
            onPress={async () => {
              let cameraResults = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                saveToPhotos: true,
              });
            }}
          />
          <Text>Take a picture</Text>
        </View>
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
