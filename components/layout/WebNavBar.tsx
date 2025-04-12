import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  Image,
  ImageStyle,
  useColorScheme,
} from "react-native";
import { Link } from "expo-router";
import { Menu, X } from "lucide-react-native";
import { useState } from "react";
import { router } from "expo-router";
import { colors } from "../../styles/index";

export function WebNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = useColorScheme() === "dark";
  return (
    <View style={styles(isDark).container}>
      <View style={styles(isDark).logoContainer}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <View style={styles(isDark).logo}>
            <Image
              style={styles(isDark).logoImage}
              source={require("../../assets/images/steak/steak_logo.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles(isDark).restaurantName}>肉のマルヤマ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles(isDark).navContainer}>
        <TouchableOpacity
          style={styles(isDark).menuButton}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} color={colors(isDark).text.primary} />
          ) : (
            <Menu size={24} color={colors(isDark).text.primary} />
          )}
        </TouchableOpacity>

        <View
          style={[
            styles(isDark).navLinks,
            isMenuOpen && styles(isDark).navLinksOpen,
          ]}
        >
          <Link href="/(tabs)" asChild>
            <TouchableOpacity style={styles(isDark).navLink}>
              <Text style={styles(isDark).navLinkText}>ホーム</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/menu" asChild>
            <TouchableOpacity style={styles(isDark).navLink}>
              <Text style={styles(isDark).navLinkText}>メニュー</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/order" asChild>
            <TouchableOpacity style={styles(isDark).navLink}>
              <Text style={styles(isDark).navLinkText}>注文</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/news" asChild>
            <TouchableOpacity style={styles(isDark).navLink}>
              <Text style={styles(isDark).navLinkText}>お知らせ</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/mypage" asChild>
            <TouchableOpacity style={styles(isDark).navLink}>
              <Text style={styles(isDark).navLinkText}>マイページ</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(pages)/contact" asChild>
            <TouchableOpacity style={styles(isDark).contactButton}>
              <Text style={styles(isDark).contactText}>予約</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = (isDark: boolean) =>
  StyleSheet.create<{
    container: ViewStyle;
    logoContainer: ViewStyle;
    logo: ViewStyle;
    logoImage: ImageStyle;
    restaurantName: TextStyle;
    navContainer: ViewStyle;
    menuButton: ViewStyle;
    navLinks: ViewStyle;
    navLinksOpen: ViewStyle;
    navLink: ViewStyle;
    navLinkText: TextStyle;
    contactButton: ViewStyle;
    contactText: TextStyle;
  }>({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    },
    logoContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    logo: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    logoImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      resizeMode: "contain",
      backgroundColor: "transparent",
    },
    restaurantName: {
      color: "#121212",
      fontSize: 18,
      fontFamily: "NotoSansJP-Bold",
    },
    navContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    menuButton: {
      display: Platform.OS === "web" ? "none" : "flex",
    },
    navLinks: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      display: Platform.OS === "web" ? "flex" : "none",
    },
    navLinksOpen: {
      ...(Platform.OS === "web"
        ? {}
        : {
            display: "flex",
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "#fff",
            padding: 16,
            flexDirection: "column",
            gap: 16,
            borderWidth: 1,
            borderColor: "#E0E0E0",
            borderRadius: 8,
          }),
    },
    navLink: {
      paddingVertical: 8,
    },
    navLinkText: {
      color: "#121212",
      fontSize: 16,
      fontFamily: "NotoSansJP-Regular",
    },
    contactButton: {
      backgroundColor: colors(isDark).primary1,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginLeft: 16,
    },
    contactText: {
      color: "#121212",
      fontSize: 14,
      fontFamily: "NotoSansJP-Bold",
    },
  });
