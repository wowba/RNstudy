import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const TabBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="caretleft" size={24} color="black" />
      <AntDesign name="caretup" size={24} color="black" />
      <AntDesign name="caretright" size={24} color="black" />
      <AntDesign name="caretdown" size={24} color="black" />
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    borderTopWidth: 0.5,
    borderTopColor: "grey",
  }
})