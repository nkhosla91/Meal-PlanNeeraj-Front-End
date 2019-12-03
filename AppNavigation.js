import { createDrawerNavigator} from 'react-navigation-drawer'
import  { createAppContainer  } from 'react-navigation'
import MyInfo from './App_screens/MyInfo'
import SettingsScreen from './App_screens/SettingsScreen'
import FoodNavigator from './App_screens/FoodNavigator'
import Meals from './App_screens/Meals'
import ScanNavigator from './App_screens/ScanNavigator'
 

export default createAppContainer (
  createDrawerNavigator({
    Scan: {
      screen: ScanNavigator
    },
    Food: {
      screen: FoodNavigator
    },
    Meals: {
      screen: Meals
    },
    "My Info": {
      screen: MyInfo
    },
    Settings: {
      screen: SettingsScreen
    },
  })
)
