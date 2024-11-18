import { useState } from 'react'
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View
} from 'react-native'
import { useAnimation } from '@/hooks/useAnimation'

interface FadeInImageProps {
  uri: string
  style: StyleProp<ImageStyle>
}

const FadeInImage = ({ uri, style }: FadeInImageProps) => {
  const { animatedOpacity, fadeIn } = useAnimation()

  const [isLoading, setIsLoading] = useState(true)

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="grey"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({ duration: 2000 })
          setIsLoading(false)
        }}
      />
    </View>
  )
}

export default FadeInImage
