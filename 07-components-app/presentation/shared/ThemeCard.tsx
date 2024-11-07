import { View, Text, ViewProps } from 'react-native'

interface ThemeCardProps extends ViewProps {}

const ThemeCard = ({ className, children }: ThemeCardProps) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
    >
      {children}
    </View>
  )
}

export default ThemeCard
