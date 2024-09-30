import { Text, Pressable, Image } from 'react-native'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { FC } from 'react'

interface MoviePosterProps {
  id: Movie['id']
  poster: Movie['poster']
  smallPoster?: boolean
  className?: string
}

const MoviePoster: FC<MoviePosterProps> = ({
  id,
  poster,
  smallPoster = false,
  className
}) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250
        }}
        resizeMode="cover"
      />
    </Pressable>
  )
}

export default MoviePoster
