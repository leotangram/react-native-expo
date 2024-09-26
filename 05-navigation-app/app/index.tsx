import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const App = () => {
  return <Redirect href="/(stack)/home" />

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-5xl" style={{ fontFamily: 'WorkSans-Black' }}>
  //         App
  //       </Text>
  //       <Text className="text-4xl font-work-black text-primary">App</Text>
  //       <Text className="text-3xl font-work-medium text-secondary">App</Text>
  //       <Text className="text-2xl font-work-light text-secondary-100">App</Text>
  //       <Text className="text-xl text-secondary-200">App</Text>
  //       <Text className="text-xl text-tertiary">App</Text>

  //       <Link href="/products">Products</Link>
  //     </View>
  //   </SafeAreaView>
  // )
}

export default App
