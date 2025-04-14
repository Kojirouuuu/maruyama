import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  useColorScheme,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { generateClient } from "@aws-amplify/api";
import { uploadData } from "@aws-amplify/storage";
import * as ImagePicker from "expo-image-picker";
import { getCurrentUser } from "@aws-amplify/auth";

import { createMenuItem } from "@/src/graphql/mutations";
import { createCommonStyles } from "@/styles/index";

const additionalStyles = (isDark: boolean) => ({
  formOptionButton: {
    backgroundColor: isDark ? "#2A2A2A" : "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  formOptionButtonSelected: {
    backgroundColor: isDark ? "#f7d762" : "#D4AF37",
  },
  imagePreview: {
    width: "100%" as const,
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default function AddMenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const isDark = useColorScheme() === "dark";
  const styles = {
    ...createCommonStyles(insets),
    ...additionalStyles(isDark),
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [takeoutOrStore, setTakeoutOrStore] = useState<"takeout" | "store">(
    "takeout"
  );
  const [mainCategory, setMainCategory] = useState<
    "steak" | "hamburg" | "curry" | "mix"
  >("steak");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const client = generateClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
      } catch (error) {
        Alert.alert("認証エラー", "ログインが必要です");
        router.replace("/login");
      }
    };
    checkAuth();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleImageUpload = async (path: string, uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    await uploadData({ path, data: blob });
  };

  const handleSubmit = async () => {
    if (!name || !price) {
      Alert.alert("入力エラー", "名前と価格を入力してください");
      return;
    }

    setIsLoading(true);
    try {
      const ext = imageUri?.split(".").pop() || "jpg";
      const imageKey = `menu/${takeoutOrStore}/${mainCategory}/${name}.${ext}`;

      if (imageUri) {
        console.log("アップロード先のキー:", imageKey);
        await handleImageUpload(imageKey, imageUri);
        console.log("画像アップロード完了");
      }

      const input = {
        name,
        description,
        price: parseFloat(price),
        categoryId: mainCategory,
        isTakeout: takeoutOrStore === "takeout",
        isSeasonal: false,
        imagePath: imageKey,
      };

      await client.graphql({
        query: createMenuItem,
        variables: { input },
        authMode: "apiKey",
      });

      Alert.alert("メニューをDynamoDBに追加しました");
      router.back();
    } catch (err) {
      console.error("追加失敗:", err);
      Alert.alert("メニューの追加に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>メニュー追加</Text>

        {error && <Text style={styles.formError}>{error}</Text>}

        {/* メニュー名 */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>メニュー名</Text>
          <TextInput
            style={styles.formInput}
            placeholder="ステーキセット"
            placeholderTextColor={styles.formInputPlaceholder.color}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* 説明 */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>説明</Text>
          <TextInput
            style={[styles.formInput, styles.formTextarea]}
            placeholder="人気No.1のステーキセット..."
            placeholderTextColor={styles.formInputPlaceholder.color}
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* 提供方法 */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>提供方法</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {["takeout", "store"].map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setTakeoutOrStore(type as any)}
                style={[
                  styles.formOptionButton,
                  takeoutOrStore === type && styles.formOptionButtonSelected,
                ]}
              >
                <Text>{type === "takeout" ? "テイクアウト" : "店内"}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* メインカテゴリ */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>メインカテゴリ</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            {["steak", "hamburg", "curry", "mix"].map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setMainCategory(cat as any)}
                style={[
                  styles.formOptionButton,
                  mainCategory === cat && styles.formOptionButtonSelected,
                ]}
              >
                <Text>
                  {cat === "steak"
                    ? "ステーキ"
                    : cat === "hamburg"
                    ? "ハンバーグ"
                    : cat === "curry"
                    ? "カレー"
                    : "ミックス"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 価格 */}
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>価格</Text>
          <TextInput
            style={styles.formInput}
            placeholder="1000"
            placeholderTextColor={styles.formInputPlaceholder.color}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </View>

        {/* 画像選択 */}
        <TouchableOpacity style={styles.formButton} onPress={pickImage}>
          <Text style={styles.formButtonText}>画像を選択</Text>
        </TouchableOpacity>

        {/* プレビュー */}
        {imageUri && (
          <View style={styles.formGroup}>
            <Image
              source={{ uri: imageUri }}
              style={styles.imagePreview}
              resizeMode="cover"
            />
          </View>
        )}

        {/* 保存ボタン */}
        <TouchableOpacity
          style={[styles.formButton, isLoading && styles.formButtonDisabled]}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={styles.formButtonText.color} />
          ) : (
            <Text style={styles.formButtonText}>保存</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
