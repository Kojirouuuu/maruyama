import { useColorScheme } from "react-native";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

export default function LoadingSpinner() {
  const isDark = useColorScheme() === "dark";
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={isDark ? "#fff" : "#555"} />
      <Text style={styles.text}>読み込み中...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 12,
    color: "#888",
  },
});
