import { View, Switch, SwitchProps, Pressable, Platform } from 'react-native'
import ThemedText from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

interface ThemedSwitchProps extends SwitchProps {
  text?: string
  onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange
}: ThemedSwitchProps) => {
  const switchActiveColor = useThemeColor({}, 'primary')

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ''}
        trackColor={{
          false: 'grey',
          true: switchActiveColor
        }}
      />
    </Pressable>
  )
}

export default ThemedSwitch