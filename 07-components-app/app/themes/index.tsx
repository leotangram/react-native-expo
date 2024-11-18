import { useState } from 'react'
import ThemeCard from '@/presentation/shared/ThemeCard'
import ThemedSwitch from '@/presentation/shared/ThemedSwitch'
import ThemeView from '@/presentation/shared/ThemeView'
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext'

const ThemesScreen = () => {
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext()

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme
  })

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light')
    toggleTheme()
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme()
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    })
  }

  return (
    <ThemeView margin>
      <ThemeCard className="mt-5 gap-5">
        <ThemedSwitch
          text="Dark Mode"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemeCard>
    </ThemeView>
  )
}
export default ThemesScreen
