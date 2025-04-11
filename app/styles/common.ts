import { StyleSheet, useColorScheme } from 'react-native';
import { colors } from '../../styles/index';

type Insets = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const commonStyles = (insets: Insets) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#000' : '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: insets.top,
      paddingBottom: 12,
      backgroundColor: isDark ? '000' : '#fff',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2A2A2A' : '#E0E0E0',
    },
    headerText: {
      color: isDark ? '#FFFFFF' : '#121212',
      fontSize: 18,
      marginLeft: 12,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'transparent',
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
    logoText: {
      color: '#121212',
      fontSize: 20,
      fontFamily: 'NotoSansJP-Bold',
    },
    restaurantName: {
      color: isDark ? '#FFFFFF' : '#121212',
      fontSize: 18,
      fontFamily: 'NotoSansJP-Bold',
    },
    contactIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      backgroundColor: colors.primary1,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    contactText: {
      color: '#121212',
      fontSize: 14,
      fontFamily: 'NotoSansJP-Bold',
    },
    tabBar: {
      backgroundColor: isDark ? '#000' : '#fff',
      paddingBottom: 0,
      height: insets.bottom,
      marginBottom: insets.bottom,
      borderTopColor: isDark ? '#000' : '#fff',
    },
    tabBarLabel: {
      fontFamily: 'NotoSansJP-Regular',
      fontSize: 0,
    },
  });
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const typography = {
  fontFamily: {
    bold: 'NotoSansJP-Bold',
    regular: 'NotoSansJP-Regular',
  },
  fontSize: {
    small: 12,
    medium: 14,
    large: 18,
    xlarge: 20,
  },
};
