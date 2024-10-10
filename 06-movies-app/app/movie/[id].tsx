import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import {
  MovieHeader,
  MovieDescription,
  MovieCast
} from '@/presentation/components'

const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { movieQuery, castQuery } = useMovie(+id)

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    castQuery.isLoading ||
    !castQuery.data
  ) {
    return (
      <View className="flex flex-1 justify-center items-center gap-4">
        <Text>Wait please...</Text>
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  )
}

export default MovieScreen
