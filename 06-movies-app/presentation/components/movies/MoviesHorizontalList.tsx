import { FC, useEffect, useRef } from 'react'
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface MoviesHorizontalListProps {
  title?: string
  movies: Movie[]
  loadNextPage?: () => void
}

const MoviesHorizontalList: FC<MoviesHorizontalListProps> = ({
  movies,
  title,
  loadNextPage
}) => {
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false
    }, 200)
  }, [movies])

  const isLoading = useRef(false)

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width

    if (!isEndReached) return

    isLoading.current = true

    loadNextPage && loadNextPage()
  }

  return (
    <View>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        keyExtractor={({ id }, i) => `${id}-${i}`}
        horizontal
        data={movies}
        renderItem={({ item: { id, poster } }) => (
          <MoviePoster id={id} poster={poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MoviesHorizontalList
