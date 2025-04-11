import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/index';
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const popularItems: MenuItem[] = [
  {
    id: '1',
    name: '特選和牛ステーキ定食',
    description: '最高級A5ランクの和牛を使用した看板メニュー',
    price: '¥3,800',
    image:
      'https://images.unsplash.com/photo-1594728613852-b8162d61c8c6?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'サーロインステーキ定食',
    description: '柔らかな肉質と程よい脂身が特徴',
    price: '¥2,800',
    image:
      'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80',
  },
];

function MenuCard({ item }: { item: MenuItem }) {
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
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1579366948929-ce3166e69825?auto=format&fit=crop&q=80',
          }}
          style={styles.heroImage}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.heroGradient}
        >
          <Text style={styles.heroTitle}>最悪の和牛ステーキ</Text>
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
              ランチ　11:30 - 14:00{'\n'}ディナー 17:30 - 22:00
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ご予約はこちら</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  heroContainer: {
    height: 500,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroTitle: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 24,
    color: colors.primary,
    marginBottom: 16,
  },
  menuCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  menuImage: {
    width: '100%',
    height: 200,
  },
  menuContent: {
    padding: 16,
  },
  menuName: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  menuDescription: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 14,
    color: '#8B8B8B',
    marginBottom: 8,
  },
  menuPrice: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 16,
    color: colors.primary,
  },
  infoCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  infoText: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#D4AF37',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 16,
    color: '#121212',
  },
  newsCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  newsDate: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 14,
    color: '#8B8B8B',
    marginBottom: 8,
  },
  newsTitle: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  newsText: {
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 14,
    color: '#8B8B8B',
    lineHeight: 20,
  },
});
