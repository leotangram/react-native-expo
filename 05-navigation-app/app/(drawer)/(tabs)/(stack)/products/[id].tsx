import { products } from '@/store/products.store'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

const ProductScreen = () => {
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const product = products.find(product => product.id === id)

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Product'
    })
  }, [product])

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
