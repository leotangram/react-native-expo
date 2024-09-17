import { globalStyles } from '@/styles/global-styles'
import { FC } from 'react'
import { Text, TextProps } from 'react-native'

interface ThemeTextProps extends TextProps {
  variant?: 'h1' | 'h2'
}

export const ThemeText: FC<ThemeTextProps> = ({
  children,
  variant = 'h1',
  ...props
}) => {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult
      ]}
      {...props}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {children}
    </Text>
  )
}
