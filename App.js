import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoalList((currentGoalList) => [...currentGoalList, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="목표를 입력하세요!!"
          onChangeText={goalInputHandler}
        />
        <Button title="목표 추가" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <Text>List of goals...</Text> */}
        {goalList.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
      {/* <Text style={styles.dummyText}>This is WestCoast!!!!</Text>
      <Text style={styles.dummyText}>Test App</Text>
      <Button
        title="로그인"
        onPress={() => {
          Alert.alert("로그인 성공");
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
