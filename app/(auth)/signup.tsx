import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { createCommonStyles } from "@/styles/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp, loading, error } = useAuthStore();
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("パスワードが一致しません");
      return;
    }
    await signUp(email, password);
    router.push("/(auth)/confirm");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>新規登録</Text>

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
            placeholder="8文字以上で入力してください"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>パスワード（確認）</Text>
          <TextInput
            style={styles.formInput}
            placeholder="パスワードを再入力"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={[styles.formButton, loading && styles.formButtonDisabled]}
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator
              size="small"
              color={styles.formButtonText.color}
            />
          ) : (
            <Text style={styles.formButtonText}>登録する</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.formHelpText}>
          すでにアカウントをお持ちの方：
          <Link href="/(auth)/login" style={styles.formLink}>
            ログイン
          </Link>
        </Text>

        {error && <Text style={styles.formError}>{error}</Text>}
      </View>
    </View>
  );
}
