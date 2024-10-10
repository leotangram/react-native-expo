import { FC } from 'react'
import { View, Text } from 'react-native'
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface MovieDescritionProps {
  movie: CompleteMovie
}

const MovieDescrition: FC<MovieDescritionProps> = ({ movie }) => {
  const { rating, genres, description, budget } = movie

  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{rating}</Text>
        <Text> - {genres.join(', ')}</Text>
      </View>
      <Text className="font-bold mt-5">Description</Text>
      <Text className="font-normal mt-2">{description}</Text>
      <Text className="font-bold mt-2">{Formatter.currency(budget)}</Text>
    </View>
  )
}

export default MovieDescrition
