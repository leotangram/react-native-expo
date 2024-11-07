import ThemeCard from '@/presentation/shared/ThemeCard'
import ThemedSwitch from '@/presentation/shared/ThemedSwitch'
import ThemeView from '@/presentation/shared/ThemeView'
import { useState } from 'react'
import { View, Text, Switch } from 'react-native'

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const { isActive, isHappy, isHungry } = state

  return (
    <ThemeView margin>
      <ThemeCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => setState({ ...state, isActive: value })}
          value={isActive}
        /> */}
        <ThemedSwitch
          text="Active"
          onValueChange={value => setState({ ...state, isActive: value })}
          className="mb-2"
          value={isActive}
        />
        <ThemedSwitch
          text="Hungry"
          onValueChange={value => setState({ ...state, isHungry: value })}
          className="mb-2"
          value={isHungry}
        />
        <ThemedSwitch
          text="Happy"
          onValueChange={value => setState({ ...state, isHappy: value })}
          className="mb-2"
          value={isHappy}
        />
      </ThemeCard>
    </ThemeView>
  )
}
export default Switches
