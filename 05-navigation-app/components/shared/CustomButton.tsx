import { FC, forwardRef, PropsWithChildren, Ref } from 'react'
import { Text, Pressable, PressableProps, View } from 'react-native'

type ButtonColor = 'primary' | 'secondary' | 'tertiary'
type ButtonVariant = 'contained' | 'text-only'

interface CustomButtonProps extends PressableProps {
  color?: ButtonColor
  variant?: ButtonVariant
  className?: string
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = forwardRef(
  (
    {
      children,
      color = 'primary',
      onPress,
      onLongPress,
      variant = 'contained',
      className
    },
    ref: Ref<View>
  ) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary'
    }[color]

    const textColor = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary'
    }[color]

    if (variant === 'text-only') {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      )
    }

    return (
      <Pressable
        // style={pressed => ({})}
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className="text-white text-center font-work-medium">
          {children}
        </Text>
      </Pressable>
    )
  }
)

export default CustomButton
