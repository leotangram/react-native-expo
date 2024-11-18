import { useEffect } from 'react'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useThemeColor } from '@/hooks/useThemeColor'
import { allRoutes } from '@/constants/Routes'
import '../global.css'
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor
            },
            headerStyle: {
              backgroundColor
            }
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: ''
            }}
          />
          {allRoutes.map(({ name, title }) => (
            <Stack.Screen
              key={name}
              name={name}
              options={{
                title,
                headerShown: !title.includes('Slides')
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  )
}
