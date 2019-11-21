import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import HomeScreen from './app_screens/HomeScreen'
import SettingsScreen from './app_screens/SettingsScreen'

export default createAppContainer (
  createDrawerNavigator({
      Home: {
        screen: HomeScreen
      },
      Settings: {
        screen: SettingsScreen
      }
  })
)
