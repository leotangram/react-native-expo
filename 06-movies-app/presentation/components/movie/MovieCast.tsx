import { Cast } from '@/infraestructure/interfaces/cast.interface'
import { View, Text, FlatList } from 'react-native'
import { ActorCard } from './ActorCard'

interface MovieCastProps {
  cast: Cast[]
}

const MovieCast = ({ cast }: MovieCastProps) => {
  return (
    <View className="mt-5 mb-52">
      <Text className="font-bold text-2xl px-5">Cast</Text>
      <FlatList
        data={cast}
        keyExtractor={({ id }) => id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  )
}

export default MovieCast
