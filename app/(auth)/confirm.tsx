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

export default function ConfirmScreen() {
  const router = useRouter();
  const { confirmSignUp, resendConfirmationCode, loading, error } =
    useAuthStore();
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);
  const [code, setCode] = useState("");

  const handleConfirm = async () => {
    await confirmSignUp(code);
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.authCard}>
        <Text style={[styles.sectionTitle, { marginBottom: 40, color: "red" }]}>
          確認コードを入力してください
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
          placeholder="確認コード"
          placeholderTextColor={styles.textSecondary.color}
          value={code}
          onChangeText={setCode}
        />
        <TouchableOpacity style={styles.button} onPress={handleConfirm}>
          {loading ? (
            <ActivityIndicator size="small" color={styles.textPrimary.color} />
          ) : (
            <Text style={styles.textPrimary}>確認</Text>
          )}
          {error && (
            <Text
              style={[
                styles.textSecondary,
                { marginTop: 16, color: "#ff4444" },
              ]}
            >
              {error}
            </Text>
          )}
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, { marginTop: 16 }]}
            onPress={() => resendConfirmationCode}
          >
            <Text style={styles.textSecondary}>
              もう一度確認コードを送信する
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
