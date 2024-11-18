import ThemeButton from '@/presentation/shared/ThemeButton'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemeView from '@/presentation/shared/ThemeView'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'

const ModalScreen = () => {
  return (
    <ThemeView className="justify-center items-center flex-1">
      <ThemedText>Hi, I'm another modal</ThemedText>
      <ThemeButton onPress={() => router.dismiss()}>Close</ThemeButton>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemeView>
  )
}

export default ModalScreen
