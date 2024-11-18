import { useState } from 'react'
import { ActivityIndicator, FlatList, Image } from 'react-native'
import ThemeView from '@/presentation/shared/ThemeView'
import { useThemeColor } from '@/hooks/useThemeColor'
import FadeInImage from '@/presentation/images/FadeInImage'

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])
  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => i + numbers.length)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <ThemeView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <ThemeView className="h-[150px] justify-center">
            <ActivityIndicator size={40} color={primaryColor} />
          </ThemeView>
        )}
      />
    </ThemeView>
  )
}
export default InfiniteScrollScreen

interface ListItemProps {
  number: number
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: '100%' }}
    />
  )
}
