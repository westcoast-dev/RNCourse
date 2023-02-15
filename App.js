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
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  // fetch("https://mbtmi-96d3c-default-rtdb.firebaseio.com/events.json", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "Test",
  //     body: "I am testing!",
  //     userId: 1,
  //   }),
  // })

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
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
  goalsContainer: {
    flex: 4,
  },
});
