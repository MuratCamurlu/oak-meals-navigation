import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar style="light" />
      <CategoriesScreen style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
