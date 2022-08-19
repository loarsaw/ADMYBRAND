import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import AppBar from "./components/AppBar";
import ListItem from "./components/ListItem";
export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(""); //going to serve as a title as well query to the title
  const add = () => {
    if (title.length > 0) {
      setItems([...items, { key: Date.now(), name: title }]);
      setTitle("");
    }
  };
  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(title.toLowerCase());
  });
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <AppBar />
      <View style={styles.todo}>
        <TextInput
          placeholder="Add Item"
          style={styles.textbox}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <Button title="Add" onPress={() => add()} />
      </View>
      <ScrollView>
        {items &&
          filteredItems.map((item) => <ListItem key={item.key} item={item} />)}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7F39FB",
    color: "#fff",
    width: "100%",
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%",
  },
 
});
