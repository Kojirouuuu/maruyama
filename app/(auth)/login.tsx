import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { createCommonStyles } from "@/styles/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const { login, loading, error } = useAuthStore();
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
    router.replace("/(tabs)/mypage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.authCard}>
        <Text style={[styles.sectionTitle, { marginBottom: 40, color: "red" }]}>
          ログイン
        </Text>
        <TextInput
          style={[
            styles.textPrimary,
            {
              backgroundColor: styles.card.backgroundColor,
              padding: 16,
              borderRadius: 8,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: styles.card.borderColor,
            },
          ]}
          placeholder="メールアドレス"
          placeholderTextColor={styles.textSecondary.color}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[
            styles.textPrimary,
            {
              backgroundColor: styles.card.backgroundColor,
              padding: 16,
              borderRadius: 8,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: styles.card.borderColor,
            },
          ]}
          placeholder="パスワード"
          placeholderTextColor={styles.textSecondary.color}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size="small" color={styles.textPrimary.color} />
          ) : (
            <Text
              style={[
                styles.textPrimary,
                { color: styles.card.backgroundColor },
              ]}
            >
              ログイン
            </Text>
          )}
        </TouchableOpacity>
        <Text style={styles.textSecondary}>
          アカウントをお持ちでない方：
          <Link href="/(auth)/signup">新規登録（無料）</Link>
        </Text>
        {error && (
          <Text
            style={[styles.textSecondary, { marginTop: 16, color: "#ff4444" }]}
          >
            {error}
          </Text>
        )}
      </View>
    </View>
  );
}
