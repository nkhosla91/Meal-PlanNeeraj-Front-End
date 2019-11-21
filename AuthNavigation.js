import { createStackNavigator } from 'react-navigation-stack'
import  { createAppContainer  } from 'react-navigation'
import Login from './auth_screens/Login'
import Signup from './auth_screens/Signup'
import WelcomeScreen from './auth_screens/WelcomeScreen'

export default createAppContainer (
  createStackNavigator(
      {
        WelcomeScreen: WelcomeScreen,
        Login: Login,
        Signup: Signup,
      },
      {
        initialRouteName: 'WelcomeScreen',
        headerMode: 'none',
      }
    )
)

