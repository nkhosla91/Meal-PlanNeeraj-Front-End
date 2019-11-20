import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

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
