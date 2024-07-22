import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AccountTab = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://akcdn.detik.net.id/community/media/visual/2020/08/18/xaviera-putri_169.jpeg?w=620" }} style={styles.gambar} />
      <Text style={styles.textName}>Xaviera</Text>
      <TouchableOpacity>
        <View style={styles.tombol}>
          <Text style={styles.tombolText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
      <Profile title="Settings" gambar={require("../../assets/img/setting.png")} />
      <Profile title="History" gambar={require("../../assets/img/history.png")} />
      <Profile title="Help" gambar={require("../../assets/img/question.png")} />
      <Profile title="Logout" gambar={require("../../assets/img/logout.png")} />
    </View>
  );
};

export default AccountTab;

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity>
        <View style={{ padding: 10, marginTop: 18, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
          <Image source={this.props.gambar} style={{ width: 26, height: 26, marginHorizontal: 40 }} />
          <Text style={{ fontSize: 18, marginHorizontal: 40 }}>{this.props.title}</Text>
          <Image source={require("../../assets/img/next.png")} style={{ width: 26, height: 26, marginHorizontal: 40 }} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  gambar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  tombol: {
    padding: 10,
    backgroundColor: "#694fad",
    width: 120,
    alignItems: "center",
    borderRadius: 10,
  },
  tombolText: {
    color: "white",
    fontSize: 16,
  },
});
