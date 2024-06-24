import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);

  const onPressNum = (num) => {
    if (currentOperator) {
      setResult(input);
      setInput(num);
    } else {
      setInput((prev) => Number(String(prev) + String(num)))
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator)
    } else {
      switch (currentOperator) {
        case "+":
          setResult(result + input);
          setInput(result + input);
          return;
        case "-":
          setResult(result - input);
          setInput(result - input);
          return;
        case "*":
          setResult(result * input);
          setInput(result * input);
          return;
        case "/":
          setResult(result / input);
          setInput(result / input);
          return;
      }
    }
  };

  const onPressReset = () => {
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
  }

  return (
    <View style={{ flex: 1, width: 250, alignItems: "center", justifyContent: "center" }}>
      {/* 결과 */}
      <View style={{ paddingVertical: 5, width: "100%", backgroundColor: "#4e4c51", minHeight: 50, justifyContent: "center", alignItems: "flex-end" }}>
        <Text style={{ textAlign: "right", color: "white", fontSize: 35 }}>{input}</Text>
      </View>
      {/* AC ~ % */}
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="reset"
          text="AC"
          flex={1}
          onPress={() => onPressReset()}
        />
        <Button
          type="reset"
          text="+/-"
          flex={1}
          onPress={() => null}
        />
        <Button
          type="reset"
          text="%"
          flex={1}
          onPress={() => null}
        />
        <Button
          type="operator"
          text="/"
          flex={1}
          onPress={() => onPressOperator("/")}
        />
      </View>
      {/* 7 ~ X */}
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="num"
          text="7"
          flex={1}
          onPress={() => onPressNum(7)}
        />
        <Button
          type="num"
          text="8"
          flex={1}
          onPress={() => onPressNum(8)}
        />
        <Button
          type="num"
          text="9"
          flex={1}
          onPress={() => onPressNum(9)}
        />
        <Button
          type="operator"
          text="X"
          flex={1}
          onPress={() => onPressOperator("*")}
        />
      </View>
      {/* 4 ~ - */}
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="num"
          text="4"
          flex={1}
          onPress={() => onPressNum(4)}
        />
        <Button
          type="num"
          text="5"
          flex={1}
          onPress={() => onPressNum(5)}
        />
        <Button
          type="num"
          text="6"
          flex={1}
          onPress={() => onPressNum(6)}
        />
        <Button
          type="operator"
          text="-"
          flex={1}
          onPress={() => onPressOperator("-")}
        />
      </View>
      {/* 1 ~ + */}
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="num"
          text="1"
          flex={1}
          onPress={() => onPressNum(1)}
        />
        <Button
          type="num"
          text="2"
          flex={1}
          onPress={() => onPressNum(2)}
        />
        <Button
          type="num"
          text="3"
          flex={1}
          onPress={() => onPressNum(3)}
        />
        <Button
          type="operator"
          text="+"
          flex={1}
          onPress={() => onPressOperator("+")}
        />
      </View>
      {/* 0 ~ = */}
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Button
          type="num"
          text="0"
          flex={2}
          onPress={() => onPressNum(0)}
        />
        <Button
          type="num"
          text="."
          flex={1}
          onPress={() => null}
        />
        <Button
          type="operator"
          text="="
          flex={1}
          onPress={() => onPressOperator("=")}
        />
      </View>
    </View >
  )
}

export default Calculator

const styles = StyleSheet.create({})