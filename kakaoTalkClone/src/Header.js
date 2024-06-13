import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({ name }) => {
  return (
    <View style={styles.icon}>
      <Ionicons name={name} size={24} color="black" />
    </View>
  )
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>

      <View style={styles.iconContainer}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10, // paddingTop, paddingBottom을 합친 것
  },
  iconContainer: {
    flexDirection: "row"
  },
  icon: {
    paddingHorizontal: 6, // paddingLeft, paddingRight를 합친 것
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  }
})