import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

//const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default function CustomCard() {
  return (
    <Card
      mode="outlined"
      style={{ margin: 16, padding: 16 }}
      onPress={() => {}}
    >
      <Card.Content>
        <Title>Solar Training</Title>
        <Paragraph>
          Need R10995 to book training and R1200 to register for accreditation
        </Paragraph>
      </Card.Content>
      {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
      <View style={{ flex: 1, alignContent: "flex-end" }}>
        <Card.Actions>
          <TouchableOpacity style={{ top: 10, left: 310 }}>
            <Icon size={24} color="red" name="edit" />
          </TouchableOpacity>
          <TouchableOpacity style={{ top: 10, left: 320 }}>
            <Icon size={24} color="red" name="trash-alt" />
          </TouchableOpacity>
        </Card.Actions>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({});
