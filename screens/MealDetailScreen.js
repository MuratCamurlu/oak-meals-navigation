import { View, Text } from "react-native";
import { MEALS } from "../data/fake-data";

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);

  return (
    <View>
      <Text>MealDetailScreen - {mealId} </Text>
    </View>
  );
};

export default MealDetailScreen;
