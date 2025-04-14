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

export default function ConfirmScreen() {
  const router = useRouter();
  const { confirmSignUp, loading, error } = useAuthStore();
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  const [code, setCode] = useState("");

  const handleConfirm = async () => {
    await confirmSignUp(code);
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>確認コードを入力</Text>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>確認コード</Text>
          <TextInput
            style={styles.formInput}
            placeholder="確認コードを入力してください"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.formHelpText}>
          メールに送信された6桁の確認コードを入力してください
        </Text>

        <TouchableOpacity
          style={[styles.formButton, loading && styles.formButtonDisabled]}
          onPress={handleConfirm}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator
              size="small"
              color={styles.formButtonText.color}
            />
          ) : (
            <Text style={styles.formButtonText}>確認する</Text>
          )}
        </TouchableOpacity>

        {error && <Text style={styles.formError}>{error}</Text>}
      </View>
    </View>
  );
}
