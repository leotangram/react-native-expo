import { TextInput, TextInputProps } from 'react-native'

interface ThemedTextInputProps extends TextInputProps {}

const ThemedTextInput = ({ className, ...rest }: ThemedTextInputProps) => {
  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white`}
      placeholderTextColor="grey"
      {...rest}
    />
  )
}

export default ThemedTextInput
