import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import MyInfo from './App_screens/MyInfo'
import SettingsScreen from './App_screens/SettingsScreen'
import Food from './App_screens/Food'
import Meals from './App_screens/Meals'

export default createAppContainer (
  createDrawerNavigator({
    Meals: {
      screen: Meals
    },
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
