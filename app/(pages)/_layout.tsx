import { Stack } from 'expo-router';
import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { commonStyles } from '../styles/common';
import { colors } from '../../styles/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PagesLayout() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const styles = commonStyles(insets);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ChevronLeft color={'black'} size={24} />
          <Text style={styles.headerText}>戻る</Text>
        </TouchableOpacity>
      </View>

      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
