import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const MealCard = ({ title, image, affordability, duration, complexity }) => {
  return (
    <View style={styles.card}>
      <Pressable>
        <View style={styles.contentWrapper}>
          <Image
            source={image}
            // onError={() => setImageSource(require("../assets/meals/pizza.jpg"))}
            // source={{
            //   uri: "https://www.deliciouslycleaneats.com.au/wp-content/uploads/2018/08/Meal-Plan-Spread1.jpg",
            // }}l
            // source={require("../assets/meals/pizza.jpg")}
            style={styles.image}
          />
          <View style={styles.detailsWrapper}>
            <Text style={styles.title}> {title} </Text>
            <View style={styles.details}>
              <Text style={styles.detailText}>
                💰 {affordability.toUpperCase()}
              </Text>
              <Text style={styles.detailText}>⏱ {duration} min </Text>
              <Text style={styles.detailText}>
                🔧 {complexity.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  contentWrapper: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  detailsWrapper: {
    padding: 15,
    backgroundColor: "#FFCC80",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0D47A1",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0D47A1",
  },
});
