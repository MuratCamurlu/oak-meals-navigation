import { View, Text, Pressable } from "react-native";

const CategoryTitle = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryTitle;
