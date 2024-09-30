import { View, ActivityIndicator, Text, ScrollView } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MainSlideShow, MoviesHorizontalList } from '@/presentation/components'

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }

  const safeAreaTop = `pt-${useSafeAreaInsets().top}`

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <View className="gap-5">
          <MoviesHorizontalList
            movies={popularQuery.data ?? []}
            title="Popular"
          />
          <MoviesHorizontalList
            movies={topRatedQuery.data ?? []}
            title="Top Rated"
          />
          <MoviesHorizontalList
            movies={upcomingQuery.data ?? []}
            title="Upcoming"
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen
