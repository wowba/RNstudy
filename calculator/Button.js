import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const COLOR = {
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674"
}

// type: "reset" | "operator" | "num"
const Button = ({ text, onPress, flex, type }) => {

  const getBgColor = () => {
    switch (type) {
      case "reset":
        return COLOR.RESET;
      case "operator":
        return COLOR.OPERATOR;
      case "num":
        return COLOR.NUM;
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50, flex, backgroundColor: getBgColor(), justifyContent: "center", alignItems: "center",
        borderWidth: 1, borderColor: "black"
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
