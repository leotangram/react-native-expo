import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Stack, useNavigation } from 'expo-router'

const StackLayout = () => {
  const navigation = useNavigation()

  const handleHeaderLeft = (canGoBack: boolean) => {
    if (canGoBack) {
      // navigation.goBack()
      navigation.dispatch(StackActions.pop())
      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            size={20}
            className="mr-5"
            onPress={() => handleHeaderLeft(canGoBack)}
          />
        )
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Home Screen' }} />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products Screen'
          // animation: 'fade_from_bottom'
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: 'Profile Screen' }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: 'Settings Screen' }}
      />
    </Stack>
  )
}

export default StackLayout
