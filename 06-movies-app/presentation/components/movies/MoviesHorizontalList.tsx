import { FC } from 'react'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster'

interface MoviesHorizontalListProps {
  title?: string
  movies: Movie[]
}

const MoviesHorizontalList: FC<MoviesHorizontalListProps> = ({
  movies,
  title
}) => {
  return (
    <View>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        keyExtractor={({ id }) => String(id)}
        horizontal
        data={movies}
        renderItem={({ item: { id, poster } }) => (
          <MoviePoster id={id} poster={poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MoviesHorizontalList
