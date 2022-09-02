import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import app from "../config/firebase";
// import Moment from "moment";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const notesRef = app.firestore().collection("notes");
  const navigation = useNavigation();
  notesRef
    .get()
    .then((items) => {
      const notes = [];
      items.forEach((item) => {
        const { title, note, created } = item.data();
        notes.push({
          id: item.id,
          title,
          note,
          created,
        });
      });
      setNotes(notes);
    })
    .catch((error) => {
      alert(error);
    });

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <FlatList
        scrollEnabled={true}
        data={notes}
        numColumns={1}
        flexDirection={"column"}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NoteDetail");
            }}
          >
            <Card mode="outlined" style={{ margin: 16, padding: 16 }}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.note}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <View style={{ flex: 1, alignContent: "flex-end" }}>
                <Card.Actions>
                  <TouchableOpacity
                    style={{ left: 240 }}
                    onPress={() => alert("Edit Note")}
                  >
                    <Icon size={32} color="#6699cc" name="edit" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ left: 245 }}>
                    <Icon
                      size={34}
                      color="red"
                      name="trash-alt"
                      onPress={() => alert("Delete Note")}
                    />
                  </TouchableOpacity>
                </Card.Actions>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",

    padding: 16,
    borderRadius: 5,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    color: "#6699CC",
    fontSize: 25,
  },
  note: {
    fontWeight: "300",
    color: "#6699CC",
    fontSize: 20,
  },
  created: {
    fontWeight: "100",

    fontSize: 16,
  },
});
