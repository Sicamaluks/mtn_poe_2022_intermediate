import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import app from "../config/firebase";
import Moment from "moment";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const notesRef = app.firestore().collection("notes");

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
        data={notes}
        numColumns={1}
        flexDirection={"column"}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.note}>{item.note}</Text>
            </View>
          </Pressable>
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
