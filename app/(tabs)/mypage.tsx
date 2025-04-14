import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { colors, typography, spacing } from "@/styles/index";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { signOutFromCognito } from "@/lib/aws/auth";
export default function MyPage() {
  const router = useRouter();
  const { user, isAuthenticated, isAdmin } = useAuthStore();
  const isDark = useColorScheme() === "dark";

  useEffect(() => {
    if (isAuthenticated === false) {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null || isAuthenticated === undefined) {
    return <LoadingSpinner />;
  }
  if (isAuthenticated === false) {
    console.log("user", user);
    return null;
  }

  return (
    <View style={styles(isDark).container}>
      <Text style={styles(isDark).title}>マイページ</Text>
      {isAdmin && (
        <TouchableOpacity
          style={styles(isDark).button}
          onPress={() => router.push("/(admin)/add-menu")}
        >
          <Text style={styles(isDark).buttonText}>メニュー追加</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles(isDark).button}
        onPress={() => {
          signOutFromCognito();
          router.replace("/(auth)/login");
        }}
      >
        <Text style={styles(isDark).buttonText}>ログアウト</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark
        ? colors(isDark).background
        : colors(isDark).white,
      padding: spacing.large,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      justifyContent: "center",
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.xxlarge,
      color: colors(isDark).text.primary,
      marginBottom: spacing.large,
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
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.large,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.medium,
      color: colors(isDark).text.primary,
    },
  });
