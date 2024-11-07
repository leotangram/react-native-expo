import { Text, TextProps } from 'react-native'

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

interface ThemedTextProps extends TextProps {
  type?: TextType
}

const ThemedText = ({ className, type, ...rest }: ThemedTextProps) => {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
        type === 'normal' && 'font-normal',
        type === 'h1' && 'text-3xl',
        type === 'h2' && 'text-2xl',
        type === 'semi-bold' && 'font-semibold',
        type === 'link' && 'font-normal underline',
        className
      ].join(' ')}
      {...rest}
    />
  )
}

export default ThemedText
