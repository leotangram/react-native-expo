import { View } from 'react-native'
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes
} from '@/constants/Routes'
import ThemeView from '@/presentation/shared/ThemeView'
import MenuItem from '@/presentation/menu/MenuItem'

const ComponentsApp = () => {
  return (
    <ThemeView margin>
      {animationMenuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {uiMenuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {menuRoutes.map(({ name, title, icon }, index) => (
        <MenuItem
          key={title}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemeView>
  )
}

export default ComponentsApp
