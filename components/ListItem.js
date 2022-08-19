import { Text, StyleSheet, View } from "react-native";
import React from "react";

export default function ListItem(props) {
  return (
    <View style={styles.listTile}>
      <Text style={styles.title}>{props.item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666",
  },

  title: {
    width: "60%",
    fontSize: 18,
  },
});
