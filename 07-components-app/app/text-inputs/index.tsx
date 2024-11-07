import ThemeCard from '@/presentation/shared/ThemeCard'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedTextInput from '@/presentation/shared/ThemedTextInput'
import ThemeView from '@/presentation/shared/ThemeView'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemeView margin className="gap-5">
          <ThemeCard>
            <ThemedTextInput
              placeholder="Complete name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={text => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={text => setForm({ ...form, phone: text })}
            />
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
        </ThemeView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default TextInputsScreen
