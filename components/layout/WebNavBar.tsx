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
} from 'react-native';
import { Link } from 'expo-router';
import { Menu, X } from 'lucide-react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { colors } from '../../styles/index';

export function WebNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/images/steak/steak_logo.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.restaurantName}>肉のマルヤマ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} color={colors.text.primary} />
          ) : (
            <Menu size={24} color={colors.text.primary} />
          )}
        </TouchableOpacity>

        <View style={[styles.navLinks, isMenuOpen && styles.navLinksOpen]}>
          <Link href="/(tabs)" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>ホーム</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/menu" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>メニュー</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/order" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>注文</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/news" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>お知らせ</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(tabs)/mypage" asChild>
            <TouchableOpacity style={styles.navLink}>
              <Text style={styles.navLinkText}>マイページ</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(pages)/contact" asChild>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactText}>予約</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create<{
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  restaurantName: {
    color: '#121212',
    fontSize: 18,
    fontFamily: 'NotoSansJP-Bold',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    display: Platform.OS === 'web' ? 'none' : 'flex',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    display: Platform.OS === 'web' ? 'flex' : 'none',
  },
  navLinksOpen: {
    ...(Platform.OS === 'web'
      ? {}
      : {
          display: 'flex',
          position: 'absolute',
          top: '100%',
          right: 0,
          backgroundColor: '#fff',
          padding: 16,
          flexDirection: 'column',
          gap: 16,
          borderWidth: 1,
          borderColor: '#E0E0E0',
          borderRadius: 8,
        }),
  },
  navLink: {
    paddingVertical: 8,
  },
  navLinkText: {
    color: '#121212',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Regular',
  },
  contactButton: {
    backgroundColor: colors.primary1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 16,
  },
  contactText: {
    color: '#121212',
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
  },
});
