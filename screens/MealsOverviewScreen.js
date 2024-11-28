import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/fake-data";
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";
const MealsOverviewScreen = () => {
  // const { itemId } = route.params;
  const { params } = useRoute();
  const { itemId } = params;

  const selectedMeal = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(itemId) >= 0
  );

  const renderMealItem = (meal) => {
    return <MealCard title={meal.item.title} />;
  };

  return (
    <View>
      {selectedMeal.length === 0 ? (
        <View>
          <Text>Your selected meal is not available</Text>
        </View>
      ) : (
        <FlatList
          data={selectedMeal}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      )}
    </View>
  );
};

export default MealsOverviewScreen;
