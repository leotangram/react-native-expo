import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false
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
