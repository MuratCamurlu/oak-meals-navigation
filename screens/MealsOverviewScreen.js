import { View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/fake-data";
import { useRoute } from "@react-navigation/native";
import MealCard from "../components/MealCard";
import { useEffect } from "react";
const MealsOverviewScreen = ({ navigation }) => {
  // const { itemId } = route.params;
  const { params } = useRoute();
  const { itemId } = params;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === itemId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [itemId, navigation]);

  const selectedMeal = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(itemId) >= 0
  );

  const renderMealItem = (meal) => {
    return <MealCard {...meal.item} />;
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
