import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="목표를 입력하세요" />
        <Button title="목표 추가" />
      </View>
      <View>
        <Text>List of goals...</Text>
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
    padding: 50,
    paddingTop: 100,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: {
  //   margin: 16,
  //   borderWidth: 2,
  //   borderColor: "#87faca",
  //   padding: 16,
  // },
});
