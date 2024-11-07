import { Pressable, PressableProps, Text } from 'react-native'

interface ThemeButtonProps extends PressableProps {
  children: string
}

const ThemeButton = ({ children, className, ...rest }: ThemeButtonProps) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...rest}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  )
}

export default ThemeButton
