import { FC, useRef } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface MainSlideShowProps {
  movies: Movie[]
}

const MainSlideShow: FC<MainSlideShowProps> = ({ movies }) => {
  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item: { id, poster } }) => (
          <MoviePoster id={id} poster={poster} />
        )}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideShow
