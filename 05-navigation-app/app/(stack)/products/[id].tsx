import { products } from '@/store/products.store'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const ProductScreen = () => {
  const { id } = useLocalSearchParams()

  const product = products.find(product => product.id === id)

  if (!product) return <Redirect href="/" />

  const { title, description, price } = product

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{title}</Text>
      <Text>{description}</Text>
      <Text className="font-work-black">{price}</Text>
    </View>
  )
}

export default ProductScreen
