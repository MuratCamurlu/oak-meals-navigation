import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { MEALS } from "../data/fake-data";
import { useEffect } from "react";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);

  const headerButtonHandler = () => {
    console.log("Click Me");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            icon="star"
            color="white"
            onClick={headerButtonHandler}
          />
        );
        // return <Button title="Click" onPress={headerButtonHandler} />;
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={selectedMeal.image} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((item, index) => (
          <Text style={styles.text} key={index}>
            {" "}
            - {item}{" "}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Steps</Text>
        {selectedMeal.steps.map((item, index) => (
          <Text style={styles.text} key={index}>
            {index + 1}. {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#800",
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    borderWidth: 2,
    borderColor: "#800",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 6,
    backgroundColor: "#f8f8f8",
  },
});
