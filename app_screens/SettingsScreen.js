import { createStackNavigator } from 'react-navigation-stack'
import  { createAppContainer  } from 'react-navigation'
import SettingsHome from './SettingsScreens/SettingsHome'
import EditUser from './SettingsScreens/EditUser'



export default createAppContainer (
  createStackNavigator(
      {
        SettingsHome: SettingsHome,
        EditUser: EditUser
      },
      {
        initialRouteName: 'SettingsHome',
        headerMode: 'none',
      }
    )
)
