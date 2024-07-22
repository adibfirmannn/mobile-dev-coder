import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

export default function CardFoto() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.gambar}
        source={{ uri: "https://i.pinimg.com/736x/3a/14/1e/3a141e695d8a14986315fa76b7bfff7b.jpg" }}
      />
      <Text style={styles.textProduct}>NEW MACBOOK PRO 2030</Text>
      <Text style={styles.textPrice}>RP. 2.000.000</Text>
      <Text style={styles.textLocation}>SIDOARJO</Text>
      <Button title="BELI" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 350,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 15,
    padding: 30,
  },
  gambar: {
    width: 250,
    height: 166,
    alignSelf: "center",
    borderRadius: 15,
  },
  textProduct: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  textPrice: {
    color: "#F23B3B",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  textLocation: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});
