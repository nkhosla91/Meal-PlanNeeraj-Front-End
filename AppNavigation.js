import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import MyInfo from './App_screens/MyInfo'
import SettingsScreen from './App_screens/SettingsScreen'
import FoodNavigator from './App_screens/FoodNavigator'
import Meals from './App_screens/Meals'

export default createAppContainer (
  createDrawerNavigator({
    MyInfo: {
      screen: MyInfo
    },
    Meals: {
      screen: Meals
    },
    FoodNavigator: {
      screen: FoodNavigator
    },
      Settings: {
        screen: SettingsScreen
      }
  })
)
