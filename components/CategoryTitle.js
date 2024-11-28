import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const CategoryTitle = ({ title, color }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemWrapper}>
      <Pressable
        android_ripple={{ color: "#aabbcc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate("MealsOverview")}
      >
        <View style={[styles.textWrapper, { backgroundColor: color }]}>
          <Text style={styles.text}> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryTitle;
const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { with: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  textWrapper: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
