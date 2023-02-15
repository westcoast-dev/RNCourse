import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    // fetch("https://mbtmi-96d3c-default-rtdb.firebaseio.com/events.json", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "Test",
    //     body: "I am testing!",
    //     userId: 1,
    //   }),
    // })
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
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#9753f0",
  },
  goalText: {
    color: "white",
    fontSize: 14,
  },
});
