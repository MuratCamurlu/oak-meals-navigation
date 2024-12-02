import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ onClick, icon, color }) => {
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={color} />
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
    color: "#800",
  },
});
