import { Pressable, Text } from 'react-native'
import * as Haptics from 'expo-haptics'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'

interface CalculatorButtonProps {
  label: string
  color?: string
  blackText?: boolean
  dobleSize?: boolean
  onPress: () => void
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  onPress,
  blackText = false,
  dobleSize = false
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: dobleSize ? 180 : 80
      })}
      onPress={() => {
        Haptics.selectionAsync()
        onPress()
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : Colors.textPrimary
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorButton
