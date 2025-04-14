import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createCommonStyles } from "../../styles/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const popularItems: MenuItem[] = [
  {
    id: "1",
    name: "特選和牛ステーキ定食",
    description: "最高級A5ランクの和牛を使用した看板メニュー",
    price: "¥3,800",
    image:
      "https://maruyamaa7855ea67afb4ca78759049a7953fbff4d5d0-dev.s3.ap-northeast-1.amazonaws.com/utils/placeholder.png",
  },
  {
    id: "2",
    name: "サーロインステーキ定食",
    description: "柔らかな肉質と程よい脂身が特徴",
    price: "¥2,800",
    image:
      "https://maruyamaa7855ea67afb4ca78759049a7953fbff4d5d0-dev.s3.ap-northeast-1.amazonaws.com/utils/placeholder.png",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  return (
    <View style={styles.menuCard}>
      <Image source={{ uri: item.image }} style={styles.menuImage} />
      <View style={styles.menuContent}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <Text style={styles.menuPrice}>{item.price}</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const styles = createCommonStyles(insets);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: "https://maruyamaa7855ea67afb4ca78759049a7953fbff4d5d0-dev.s3.ap-northeast-1.amazonaws.com/utils/placeholder.png",
          }}
          style={styles.heroImage}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.heroGradient}
        >
          <Text style={styles.heroTitle}>極上の和牛ステーキ</Text>
          <Text style={styles.heroSubtitle}>伝統の技と最高級の素材</Text>
        </LinearGradient>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>本日のおすすめ</Text>
          {popularItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>営業時間</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              ランチ　11:30 - 14:00{"\n"}ディナー 17:30 - 22:00
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textPrimary}>ご予約はこちら</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>お知らせ</Text>
          <View style={styles.newsCard}>
            <Text style={styles.newsDate}>2024.03.01</Text>
            <Text style={styles.newsTitle}>春の新メニュー登場</Text>
            <Text style={styles.newsText}>
              春野菜を使用した季節限定の新メニューが登場しました。
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
