import { Text, Pressable, StyleSheet } from 'react-native'

type Position = 'left' | 'right'

interface FABProps {
  label: string
  position?: Position

  // Methods
  onPress?: () => void
  onLongPress?: () => void
}

export default function FAB({
  label,
  onLongPress,
  onPress,
  position = 'right'
}: FABProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        styles[
          `position${
            position.charAt(0).toUpperCase() + position.slice(1)
          }` as keyof typeof styles
        ],
        pressed && { opacity: 0.7 }
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558f',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4
  },
  positionRight: {
    right: 20
  },
  positionLeft: {
    left: 20
  }
})
