import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "maroon" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#ff4d4d" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
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
