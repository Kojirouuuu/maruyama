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
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>ログイン</Text>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>メールアドレス</Text>
          <TextInput
            style={styles.formInput}
            placeholder="example@example.com"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>パスワード</Text>
          <TextInput
            style={styles.formInput}
            placeholder="パスワードを入力"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={[styles.formButton, loading && styles.formButtonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator
              size="small"
              color={styles.formButtonText.color}
            />
          ) : (
            <Text style={styles.formButtonText}>ログイン</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.formHelpText}>
          アカウントをお持ちでない方：
          <Link href="/(auth)/signup" style={styles.formLink}>
            新規登録（無料）
          </Link>
        </Text>

        {error && <Text style={styles.formError}>{error}</Text>}
      </View>
    </View>
  );
}
