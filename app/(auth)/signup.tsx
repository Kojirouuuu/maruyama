import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { createCommonStyles } from "@/styles/index";
import { useAuthStore } from "@/store/authStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp, loading, error } = useAuthStore();
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await signUp(email, password);
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.authCard}>
        <Text style={[styles.sectionTitle, { marginBottom: 40, color: "red" }]}>
          新規登録
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
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          {loading ? (
            <ActivityIndicator size="small" color={styles.textPrimary.color} />
          ) : (
            <Text
              style={[
                styles.textPrimary,
                { color: styles.card.backgroundColor },
              ]}
            >
              新規登録
            </Text>
          )}
        </TouchableOpacity>
        <Text style={styles.textSecondary}>
          アカウントをお持ちの方：
          <Link href="/(auth)/login">ログイン</Link>
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
