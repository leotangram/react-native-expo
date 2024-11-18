import { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemeView from '@/presentation/shared/ThemeView'
import { useThemeColor } from '@/hooks/useThemeColor'

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor(
    {
      light: 'white',
      dark: 'black'
    },
    'background'
  )

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = async () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemeView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemeView>
    </ScrollView>
  )
}
export default PullToRefreshScreen
