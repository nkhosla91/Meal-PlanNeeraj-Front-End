import { DrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const AppNavigation = DrawerNavigator({
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
})

export default AppNavigation