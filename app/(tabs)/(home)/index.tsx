import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>hello page 1111</Text>
      <Link
        href={{
          pathname: "/test/[id]",
          params: { id: "asdasdasdasdasdasasdasdas" },
        }}
      >
        View user details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
