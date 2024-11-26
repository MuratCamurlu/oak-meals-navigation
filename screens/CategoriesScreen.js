import { FlatList } from "react-native";
import { CATEGORIES } from "../data/fake-data";
import renderCategoriesItem from "../utils/function";

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
