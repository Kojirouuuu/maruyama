import { Tabs } from "expo-router";
import {
  House,
  BookOpenText,
  ShoppingBag,
  Bell,
  User,
} from "lucide-react-native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WebNavBar } from "../../components/layout/WebNavBar";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Platform } from "react-native";
import { colors, createCommonStyles, typography } from "../../styles/index";

function Header() {
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/steak/steak_logo.png")}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.restaurantName}>肉のマルヤマ</Text>
      </View>
      <View style={styles.contactIcons}>
        <Link href="/(pages)/contact" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.contactText}>予約</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);
  const { width } = useWindowSize();
  const isWeb = Platform.OS === "web";
  const isMobile = width < 768;
  const isDark = useColorScheme() === "dark";
  return (
    <View style={styles.container}>
      {isWeb ? <WebNavBar /> : <Header />}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: [styles.tabBar, isWeb && { display: "none" }],
          tabBarActiveTintColor: colors(isDark).secondary,
          tabBarInactiveTintColor: colors(isDark).text.secondary,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "ホーム",
            tabBarIcon: ({ color, size }) => (
              <House size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "メニュー",
            tabBarIcon: ({ color, size }) => (
              <BookOpenText size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: "注文",
            tabBarIcon: ({ color, size }) => (
              <ShoppingBag size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: "お知らせ",
            tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="mypage"
          options={{
            title: "マイページ",
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
