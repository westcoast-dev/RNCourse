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
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function modalHandler() {
    setIsVisible(true);
  }

  function modalCloseHandler() {
    setIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    modalCloseHandler();
  }

  const deleteHandler = (id) => {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.id !== id);
    });
  };

  // fetch("https://mbtmi-96d3c-default-rtdb.firebaseio.com/events.json", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "Test",
  //     body: "I am testing!",
  //     userId: 1,
  //   }),
  // })

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="새로운 목표 추가"
          color="#a065ec"
          onPress={modalHandler}
        />
        <GoalInput
          visible={isVisible}
          addGoalHandler={addGoalHandler}
          onCancel={modalCloseHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteHandler}
                />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  goalsContainer: {
    flex: 4,
  },
});
