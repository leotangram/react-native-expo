import { useThemeColor } from '@/hooks/useThemeColor'
import { View, Text, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ThemeViewProps extends ViewProps {
  margin?: boolean
  safe?: boolean
  bgColor?: string
}

const ThemeView = ({
  style,
  className,
  margin = false,
  children,
  safe = false,
  bgColor
}: ThemeViewProps) => {
  const backgroundColor = bgColor ?? useThemeColor({}, 'background')
  const safeArea = useSafeAreaInsets()

  return (
    // className="bg-light-background dark:bg-dark-background"
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0
        },
        style
      ]}
      className={className}
    >
      {children}
    </View>
  )
}

export default ThemeView
