import { StyleSheet, View, Text, Image } from "react-native";

const MyProfile = ({ name, introduction, uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.thumbNail} />
      <View style={styles.infoBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.intro}>{introduction}</Text>
      </View>
    </View>
  )
}

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  thumbNail: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  infoBox: {
    display: "flex",
    justifyContent: "center",
    gap: 6,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  intro: {
    color: "grey",
    fontSize: 12
  }
})