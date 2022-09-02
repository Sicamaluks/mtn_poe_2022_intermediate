import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

//const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function CustomCard() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NoteDetail");
      }}
    >
      <Card mode="outlined" style={{ margin: 16, padding: 16 }}>
        <Card.Content>
          <Title>React Native</Title>
          <Paragraph>React Native with google's firestore</Paragraph>
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
  );
}

const styles = StyleSheet.create({});
