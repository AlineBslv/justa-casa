import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text style={{ fontFamily: 'Nunito_700Bold', fontSize: 24 }}>
        Justa Casa
      </Text>
      <Text style={{ fontFamily: 'Nunito_400Regular', fontSize: 16 }}>
        Bem-vindo ao app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
