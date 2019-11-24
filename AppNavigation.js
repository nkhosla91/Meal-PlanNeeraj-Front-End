import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import MyInfo from './App_screens/MyInfo'
import SettingsScreen from './App_screens/SettingsScreen'
import Food from './App_screens/Food'

export default createAppContainer (
  createDrawerNavigator({
      Food: {
        screen: Food
      },
      MyInfo: {
        screen: MyInfo
      },
      Settings: {
        screen: SettingsScreen
      }
  })
)
