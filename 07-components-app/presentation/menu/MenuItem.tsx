import { Href, router } from 'expo-router'
import { Pressable, View } from 'react-native'
import ThemedText from '../shared/ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'

interface MenuItemProps {
  title: string
  icon: keyof typeof Ionicons.glyphMap
  name: string
  isFirst?: boolean
  isLast?: boolean
}

const MenuItem = ({
  icon,
  name,
  title,
  isFirst = false,
  isLast = false
}: MenuItemProps) => {
  const [routerName] = name.split('/')
  const primaryColor = useThemeColor({}, 'primary')

  return (
    <Pressable
      className="bg-white dark:bg-black/15 px-5 py-2"
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10
        })
      }}
      onPress={() => router.push(routerName as Href)}
    >
      <View className="flex-row items-center">
        <Ionicons className="mr-5" name={icon} size={30} color={primaryColor} />
        <ThemedText type="h2">{title}</ThemedText>
      </View>
    </Pressable>
  )
}

export default MenuItem
