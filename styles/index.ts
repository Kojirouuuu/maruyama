import { ViewStyle, TextStyle, ImageStyle, StyleSheet, useColorScheme } from 'react-native';

type Insets = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const colors = (isDark: boolean) => {
  return {
    primary1: '#f7d762',
    primary2: '#D4AF37',
    white: '#FFFFFF',
    secondary: '#1A1A1A',
    background: '#121212',
    border: '#2A2A2A',
  text: {
      primary: isDark ? "#fff" : "#000",
      secondary: "#8B8B8B",
    },
  };
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
    xxlarge: 32,
  },
};

export const createCommonStyles = (insets: Insets) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#121212" : "#fff",
    },
    formContainer: {
      width: "100%",
      maxWidth: 800,
      alignSelf: "center" as const,
      padding: spacing.large,
      backgroundColor: isDark ? colors(isDark).background : colors(isDark).white,
      flex: 1,
    } as ViewStyle,
    formTitle: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.xxlarge,
      color: colors(isDark).text.primary,
      marginBottom: spacing.large * 2,
      textAlign: "center" as const,
    } as TextStyle,
    formGroup: {
      marginBottom: spacing.large,
    } as ViewStyle,
    formLabel: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.medium,
      color: colors(isDark).text.primary,
      marginBottom: spacing.small,
    } as TextStyle,
    formInput: {
      backgroundColor: isDark ? colors(isDark).secondary : colors(isDark).white,
      borderWidth: 1,
      borderColor: colors(isDark).border,
      borderRadius: 8,
      padding: spacing.medium,
      color: colors(isDark).text.primary,
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.medium,
    } as TextStyle,
    formInputPlaceholder: {
      color: colors(isDark).text.secondary,
    } as TextStyle,
    formTextarea: {
      height: 100,
      textAlignVertical: 'top' as const,
    } as TextStyle,
    formButton: {
      backgroundColor: colors(isDark).primary1,
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.large,
      borderRadius: 8,
      alignItems: "center" as const,
      marginBottom: spacing.medium,
    } as ViewStyle,
    formButtonText: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.medium,
      color: colors(isDark).text.primary,
    } as TextStyle,
    formButtonDisabled: {
      opacity: 0.5,
    } as ViewStyle,
    formError: {
      color: "#ff4444",
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.small,
      marginTop: spacing.small,
    } as TextStyle,
    formHelpText: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.small,
      color: colors(isDark).text.secondary,
      marginTop: spacing.small,
    } as TextStyle,
    formLink: {
      color: colors(isDark).primary1,
      textDecorationLine: "underline" as const,
    } as TextStyle,
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing.medium,
      paddingTop: insets.top,
      paddingBottom: spacing.medium,
      backgroundColor: isDark ? '#000' : '#fff',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2A2A2A' : '#E0E0E0',
    },
    headerText: {
      color: isDark ? '#FFFFFF' : '#121212',
      fontSize: typography.fontSize.large,
      marginLeft: spacing.medium,
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
      marginRight: spacing.small,
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
      fontSize: typography.fontSize.xlarge,
      fontFamily: typography.fontFamily.bold,
    },
    restaurantName: {
      color: isDark ? '#FFFFFF' : '#121212',
      fontSize: typography.fontSize.large,
      fontFamily: typography.fontFamily.bold,
    },
    contactIcons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      backgroundColor: colors(isDark).primary1,
      paddingHorizontal: spacing.medium,
      paddingVertical: spacing.small,
      borderRadius: 20,
    },
    contactText: {
      color: '#121212',
      fontSize: typography.fontSize.small,
      fontFamily: typography.fontFamily.bold,
    },
    tabBar: {
      backgroundColor: isDark ? '#000' : '#fff',
      paddingBottom: 0,
      height: insets.bottom,
      marginBottom: insets.bottom,
      borderTopColor: isDark ? '#000' : '#fff',
    },
    tabBarLabel: {
      fontFamily: typography.fontFamily.regular,
      fontSize: 0,
    },
    card: {
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: isDark ? '#2A2A2A' : '#E0E0E0',
    } as ViewStyle,
    textPrimary: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).text.primary,
    } as TextStyle,
    textSecondary: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.secondary,
    } as TextStyle,
    button: {
      backgroundColor: colors(isDark).primary1,
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.large,
      borderRadius: 8,
      alignItems: 'center',
    } as ViewStyle,
    heroContainer: {
      height: 500,
      position: "relative",
    } as ViewStyle,
    heroImage: {
      width: "100%",
      height: "100%",
    } as ImageStyle,
    heroGradient: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 200,
      justifyContent: "flex-end",
      padding: spacing.large,
    } as ViewStyle,
    heroTitle: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).text.primary,
      fontSize: typography.fontSize.xxlarge,
      marginBottom: spacing.small,
    } as TextStyle,
    heroSubtitle: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.primary,
      fontSize: typography.fontSize.large,
      marginBottom: spacing.large,
    } as TextStyle,
    contentContainer: {
      padding: spacing.large,
    } as ViewStyle,
    section: {
      marginBottom: spacing.large * 2,
    } as ViewStyle,
    sectionTitle: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).text.primary,
      fontSize: typography.fontSize.xlarge,
      marginBottom: spacing.medium,
    } as TextStyle,
    menuCard: {
      backgroundColor: colors(isDark).secondary,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors(isDark).border,
      overflow: "hidden",
      marginBottom: spacing.medium,
    } as ViewStyle,
    menuImage: {
      width: "100%",
      height: 200,
    } as ImageStyle,
    menuContent: {
      padding: spacing.medium,
    } as ViewStyle,
    menuName: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).text.primary,
      fontSize: typography.fontSize.large,
      marginBottom: spacing.small,
    } as TextStyle,
    menuDescription: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.secondary,
      fontSize: typography.fontSize.small,
      marginBottom: spacing.small,
    } as TextStyle,
    menuPrice: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).primary1,
      fontSize: typography.fontSize.medium,
    } as TextStyle,
    infoCard: {
      backgroundColor: colors(isDark).secondary,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors(isDark).border,
      padding: spacing.large,
    } as ViewStyle,
    infoText: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.secondary,
      fontSize: typography.fontSize.medium,
      marginBottom: spacing.large,
      lineHeight: 24,
    } as TextStyle,
    newsCard: {
      backgroundColor: colors(isDark).secondary,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors(isDark).border,
      padding: spacing.medium,
    } as ViewStyle,
    newsDate: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.secondary,
      fontSize: typography.fontSize.small,
      marginBottom: spacing.small,
    } as TextStyle,
    newsTitle: {
      fontFamily: typography.fontFamily.bold,
      color: colors(isDark).text.primary,
      fontSize: typography.fontSize.large,
    } as TextStyle,
    newsText: {
      fontFamily: typography.fontFamily.regular,
      color: colors(isDark).text.secondary,
      fontSize: typography.fontSize.small,
      lineHeight: 20,
    } as TextStyle,
    authCard: {
      backgroundColor: colors(isDark).secondary,
      width: "80%",
      maxWidth: 800,
      alignSelf: "center" as const,
      padding: spacing.large,
      borderRadius: 16,
      marginHorizontal: spacing.large,
      marginTop: spacing.large,
    } as ViewStyle,
    authForm: {
      width: "100%",
      maxWidth: 400,
      alignSelf: "center" as const,
      padding: spacing.large,
      borderRadius: 16,
      backgroundColor: colors(isDark).secondary,
      borderWidth: 1,
      borderColor: colors(isDark).border,
    } as ViewStyle,
    authTitle: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.xxlarge,
      color: colors(isDark).text.primary,
      marginBottom: spacing.large * 2,
      textAlign: "center" as const,
    } as TextStyle,
    authInput: {
      backgroundColor: isDark ? colors(isDark).background : colors(isDark).white,
      borderWidth: 1,
      borderColor: colors(isDark).border,
      borderRadius: 8,
      padding: spacing.medium,
      marginBottom: spacing.medium,
      color: colors(isDark).text.primary,
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.medium,
    } as TextStyle,
    authInputPlaceholder: {
      color: colors(isDark).text.secondary,
    } as TextStyle,
    authButton: {
      backgroundColor: colors(isDark).primary1,
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.large,
      borderRadius: 8,
      alignItems: "center" as const,
      marginBottom: spacing.medium,
    } as ViewStyle,
    authButtonText: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.medium,
      color: colors(isDark).text.primary,
    } as TextStyle,
    authLink: {
      color: colors(isDark).primary1,
      textDecorationLine: "underline" as const,
    } as TextStyle,
    authError: {
      color: "#ff4444",
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.small,
      marginTop: spacing.medium,
      textAlign: "center" as const,
    } as TextStyle,
    authText: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.small,
      color: colors(isDark).text.secondary,
      textAlign: "center" as const,
      marginTop: spacing.medium,
    } as TextStyle,
  });
};
