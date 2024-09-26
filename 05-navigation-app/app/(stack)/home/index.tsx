import { View, SafeAreaView } from 'react-native'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 gap-2 mt-5">
        <CustomButton color="primary" onPress={() => router.push('/products')}>
          Products
        </CustomButton>
        <CustomButton onPress={() => router.push('/profile')} color="secondary">
          Profile
        </CustomButton>
        <CustomButton onPress={() => router.push('/settings')} color="tertiary">
          Settings
        </CustomButton>
        <Link href="/products" asChild>
          <CustomButton variant="text-only" color="primary">
            Products
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
