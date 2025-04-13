import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { colors } from "@/styles/index";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export default function MyPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const isDark = useColorScheme() === "dark";
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <View style={styles(isDark).container}>
      <Text style={styles(isDark).title}>マイページ</Text>
    </View>
  );
}

const styles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      justifyContent: "center",
      fontFamily: "NotoSansJP-Bold",
      fontSize: 24,
      color: isDark ? "#fff" : "#000",
      marginBottom: 16,
    },
    description: {
      fontFamily: "NotoSansJP-Regular",
      fontSize: 16,
      color: "#aaa",
      marginBottom: 32,
      textAlign: "center",
      lineHeight: 24,
    },
    button: {
      backgroundColor: colors(isDark).primary1,
      paddingVertical: 14,
      paddingHorizontal: 36,
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: "NotoSansJP-Bold",
      fontSize: 16,
      color: "#121212",
    },
  });
