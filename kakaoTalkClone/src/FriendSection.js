import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FriendSection = ({ friendsLen, onPress, isOpened }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.friendsCount}>친구 {friendsLen}</Text>

      <TouchableOpacity onPress={onPress}>
        <MaterialIcons name={isOpened ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="lightgrey" />
      </TouchableOpacity>
    </View>
  )
}

export default FriendSection

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  friendsCount: {
    color: "grey"
  }
})