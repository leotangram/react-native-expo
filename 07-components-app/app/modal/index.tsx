import ThemeButton from '@/presentation/shared/ThemeButton'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemeView from '@/presentation/shared/ThemeView'
import { Link, router } from 'expo-router'

const ModalScreen = () => {
  return (
    <ThemeView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <ThemedText className="text-light-text dark:text-dark-text my-2 text-xl">
          Open modal
        </ThemedText>
      </Link>
      <ThemeButton
        onPress={() => router.push('/modal/modal-window')}
        className="mx-4"
      >
        Open another modal
      </ThemeButton>
    </ThemeView>
  )
}
export default ModalScreen
